/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin,
  getElementFromSelector,
  getNextActiveElement,
  isRTL,
  isVisible,
  reflow,
  triggerTransitionEnd
} from './util/index'
import EventHandler from './dom/event-handler'
import Manipulator from './dom/manipulator'
import SelectorEngine from './dom/selector-engine'
import Swipe from './util/swipe'
import BaseComponent from './base-component'

/**
 * Constants
 */

const NAME = 'carousel'
const DATA_KEY = 'bs.carousel'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ARROW_LEFT_KEY = 'ArrowLeft'
const ARROW_RIGHT_KEY = 'ArrowRight'
const TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next'
const ORDER_PREV = 'prev'
const DIRECTION_LEFT = 'left'
const DIRECTION_RIGHT = 'right'

const EVENT_SLIDE = `slide${EVENT_KEY}`
const EVENT_SLID = `slid${EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`
const EVENT_DRAG_START = `dragstart${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_CAROUSEL = 'carousel'
const CLASS_NAME_ACTIVE = 'active'
const CLASS_NAME_SLIDE = 'slide'
const CLASS_NAME_END = 'carousel-item-end'
const CLASS_NAME_START = 'carousel-item-start'
const CLASS_NAME_NEXT = 'carousel-item-next'
const CLASS_NAME_PREV = 'carousel-item-prev'
const CLASS_NAME_PAUSED = 'is-paused' // Boosted mod: used for progress indicators
const CLASS_NAME_DONE = 'is-done' // Boosted mod: used for progress indicators

const SELECTOR_ACTIVE = '.active'
const SELECTOR_ITEM = '.carousel-item'
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM
const SELECTOR_ITEM_IMG = '.carousel-item img'
const SELECTOR_INDICATORS = '.carousel-indicators'
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]'
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]'
const SELECTOR_CONTROL_PREV = '.carousel-control-prev' // Boosted mod
const SELECTOR_CONTROL_NEXT = '.carousel-control-next' // Boosted mod
const SELECTOR_CONTROL_PAUSE = '.carousel-control-play-pause' // Boosted mod
const SELECTOR_CAROUSEL_TO_PAUSE = 'data-bs-target' // Boosted mod
const SELECTOR_CAROUSEL_PLAY_TEXT = 'data-bs-play-text' // Boosted mod
const SELECTOR_CAROUSEL_PAUSE_TEXT = 'data-bs-pause-text' // Boosted mod
const SELECTOR_CAROUSEL_DEFAULT_PLAY_TEXT = 'Play Carousel' // Boosted mod
const SELECTOR_CAROUSEL_DEFAULT_PAUSE_TEXT = 'Pause Carousel' // Boosted mod

const PREFIX_CUSTOM_PROPS = 'o-' // Boosted mod: should match `$boosted-prefix` in scss/_variables.scss

const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY]: DIRECTION_LEFT
}

const Default = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
}

const DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  ride: '(boolean|string)',
  pause: '(string|boolean)',
  touch: 'boolean',
  wrap: 'boolean'
}

/**
 * Class definition
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._interval = null
    this._activeElement = null
    this._isSliding = false
    this.touchTimeout = null
    this._swipeHelper = null

    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element)

    this._playPauseButton = SelectorEngine.findOne(`${SELECTOR_CONTROL_PAUSE}[${SELECTOR_CAROUSEL_TO_PAUSE}="#${this._element.id}"]`) // Boosted mod

    this._addEventListeners()

    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle()
    }
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  next() {
    this._slide(ORDER_NEXT)
  }

  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next()
    }
  }

  prev() {
    this._slide(ORDER_PREV)
  }

  pause() {
    // Boosted mod: reset the animation on progress indicator
    if (this._indicatorsElement) {
      this._element.classList.add(CLASS_NAME_PAUSED)
    }
    // End mod

    // Boosted mod: if a play-pause button is present, set the button to play on mouseenter
    if (this._playPauseButton !== null && this._playPauseButton.classList.contains('pause')) {
      this._playPauseButton.classList.remove('pause')
      this._playPauseButton.classList.add('play')
      this._playPauseButton.setAttribute('title', (this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PLAY_TEXT) ? this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PLAY_TEXT) : SELECTOR_CAROUSEL_DEFAULT_PLAY_TEXT))
      this._playPauseButton.querySelector('span.visually-hidden').innerHTML = (this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PLAY_TEXT) ? this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PLAY_TEXT) : SELECTOR_CAROUSEL_DEFAULT_PLAY_TEXT)
      this._stayPaused = true
    }
    // End mod

    if (this._isSliding) {
      triggerTransitionEnd(this._element)
    }

    this._clearInterval()
  }

  cycle() {
    // Boosted mod: restart the animation on progress indicator
    if (this._indicatorsElement) {
      this._element.classList.remove(CLASS_NAME_PAUSED)
    }
    // End mod

    // Boosted mod: if a play-pause button is present, reset the button to pause on mouseleave
    if (this._playPauseButton !== null && this._playPauseButton.classList.contains('play')) {
      this._playPauseButton.classList.remove('play')
      this._playPauseButton.classList.add('pause')
      this._playPauseButton.setAttribute('title', (this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PAUSE_TEXT) ? this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PAUSE_TEXT) : SELECTOR_CAROUSEL_DEFAULT_PAUSE_TEXT))
      this._playPauseButton.querySelector('span.visually-hidden').innerHTML = (this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PAUSE_TEXT) ? this._playPauseButton.getAttribute(SELECTOR_CAROUSEL_PAUSE_TEXT) : SELECTOR_CAROUSEL_DEFAULT_PAUSE_TEXT)
      this._stayPaused = false
    }
    // End mod

    this._clearInterval()
    this._updateInterval()

    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
  }

  _maybeEnableCycle() {
    if (!this._config.ride) {
      return
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle())
      return
    }

    this.cycle()
  }

  to(index) {
    // Boosted mod: restart the animation on progress indicator
    if (this._indicatorsElement) {
      this._element.classList.remove(CLASS_NAME_DONE)
    }
    // End mod

    const items = this._getItems()
    if (index > items.length - 1 || index < 0) {
      return
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index))
      return
    }

    const activeIndex = this._getItemIndex(this._getActive())
    if (activeIndex === index) {
      return
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV

    this._slide(order, items[index])
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose()
    }

    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval
    return config
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event))
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, () => this.pause())
      EventHandler.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle())
    }

    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners()
    }
  }

  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault())
    }

    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return
      }

      // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause()
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout)
      }

      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval)
    }

    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    }

    this._swipeHelper = new Swipe(this._element, swipeConfig)
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return
    }

    const direction = KEY_TO_DIRECTION[event.key]
    if (direction) {
      event.preventDefault()
      this._slide(this._directionToOrder(direction))
    }
  }

  // Boosted mod: handle prev/next controls states
  _disableControl(element) {
    if (element.nodeName === 'BUTTON') {
      element.disabled = true
    } else {
      element.setAttribute('aria-disabled', true)
      element.setAttribute('tabindex', '-1')
    }
  }

  _enableControl(element) {
    if (element.nodeName === 'BUTTON') {
      element.disabled = false
    } else {
      element.removeAttribute('aria-disabled')
      element.removeAttribute('tabindex')
    }
  }
  // End mod

  _getItemIndex(element) {
    return this._getItems().indexOf(element)
  }

  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return
    }

    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement)

    activeIndicator.classList.remove(CLASS_NAME_ACTIVE)
    activeIndicator.removeAttribute('aria-current')

    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement)

    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE)
      newActiveIndicator.setAttribute('aria-current', 'true')
    }
  }

  _updateInterval() {
    const element = this._activeElement || this._getActive()

    if (!element) {
      return
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10)

    this._config.interval = elementInterval || this._config.defaultInterval

    // Boosted mod: set progress indicator's interval as custom property
    if (this._indicatorsElement && this._config.interval !== Default.interval) {
      const currentIndex = this._getItemIndex(element)
      const currentIndicator = SelectorEngine.findOne(`:nth-child(${currentIndex + 1})`, this._indicatorsElement)
      currentIndicator.style.setProperty(`--${PREFIX_CUSTOM_PROPS}carousel-interval`, `${this._config.interval}ms`)
    }
    // End mod
  }

  _slide(order, element = null) {
    if (this._isSliding) {
      return
    }

    const activeElement = this._getActive()
    const isNext = order === ORDER_NEXT

    // Boosted mod: progress indicators animation when wrapping is disabled
    if (!this._config.wrap) {
      const isPrev = order === ORDER_PREV
      const activeIndex = this._getItemIndex(activeElement)
      const lastItemIndex = this._getItems().length - 1
      const isGoingToWrap = (isPrev && activeIndex === 0) || (isNext && activeIndex === lastItemIndex)

      if (isGoingToWrap) {
        // Reset the animation on last progress indicator when last slide is active
        if (isNext && this._indicatorsElement && !this._element.hasAttribute('data-bs-slide')) {
          this._element.classList.add(CLASS_NAME_DONE)
        }

        return activeElement
      }

      // Restart animation otherwise
      if (this._indicatorsElement) {
        this._element.classList.remove(CLASS_NAME_DONE)
      }
    }
    // End mod

    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap)

    if (nextElement === activeElement) {
      return
    }

    const nextElementIndex = this._getItemIndex(nextElement)

    const triggerEvent = eventName => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      })
    }

    const slideEvent = triggerEvent(EVENT_SLIDE)

    if (slideEvent.defaultPrevented) {
      return
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // todo: change tests that use empty divs to avoid this check
      return
    }

    const isCycling = Boolean(this._interval)
    this.pause()

    this._isSliding = true

    this._setActiveIndicatorElement(nextElementIndex)
    this._activeElement = nextElement

    // Boosted mod: enable/disable prev/next controls when wrap=false
    if (!this._config.wrap) {
      const prevControl = SelectorEngine.findOne(SELECTOR_CONTROL_PREV, this._element)
      const nextControl = SelectorEngine.findOne(SELECTOR_CONTROL_NEXT, this._element)

      this._enableControl(prevControl)
      this._enableControl(nextControl)

      if (nextElementIndex === 0) {
        this._disableControl(prevControl)
      } else if (nextElementIndex === (this._getItems().length - 1)) {
        this._disableControl(nextControl)
      }
    }
    // End mod

    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV

    nextElement.classList.add(orderClassName)

    reflow(nextElement)

    activeElement.classList.add(directionalClassName)
    nextElement.classList.add(directionalClassName)

    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName)
      nextElement.classList.add(CLASS_NAME_ACTIVE)

      activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName)

      this._isSliding = false

      triggerEvent(EVENT_SLID)
    }

    this._queueCallback(completeCallBack, activeElement, this._isAnimated())

    if (isCycling) {
      this.cycle()
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE)
  }

  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element)
  }

  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element)
  }

  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }
  }

  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV
  }

  _orderToDirection(order) {
    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT
  }

  // Static
  // Boosted mod: add pause button
  static PauseCarousel(event) {
    const pauseButton = event.target
    const pauseButtonAttribute = pauseButton.getAttribute(SELECTOR_CAROUSEL_TO_PAUSE)
    const carouselToPause = Carousel.getOrCreateInstance(document.querySelector(pauseButtonAttribute))
    if (pauseButton.classList.contains('pause')) {
      carouselToPause.pause()
    } else {
      carouselToPause.cycle()
    }
  }
  // End mod

  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config)

      if (typeof config === 'number') {
        data.to(config)
        return
      }

      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
  const target = getElementFromSelector(this)

  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return
  }

  event.preventDefault()

  const carousel = Carousel.getOrCreateInstance(target)
  const slideIndex = this.getAttribute('data-bs-slide-to')

  if (slideIndex) {
    carousel.to(slideIndex)
    carousel._maybeEnableCycle()
    return
  }

  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next()
    carousel._maybeEnableCycle()
    return
  }

  carousel.prev()
  carousel._maybeEnableCycle()
})

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_CONTROL_PAUSE, Carousel.PauseCarousel) // Boosted mod

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE)

  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(Carousel)

export default Carousel
