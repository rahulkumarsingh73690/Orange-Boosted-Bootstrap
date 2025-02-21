---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the four **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts JavaScript plugin](#dismissing).

{{< example >}}
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Live example

Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.

{{< example >}}
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
{{< /example >}}

We use the following JavaScript to trigger our live alert demo:

<!-- Boosted mod: adapted innerHTML to have the icon and so added a parameter within alert() -->

```js
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type, typeVisuallyHidden) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    '   <span class="alert-icon">',
    `      <span class="visually-hidden">${typeVisuallyHidden}</span>`,
    '   </span>',
    '   <p>',
    `     ${message}`,
    '   </p>',
    '   <button type="button" class="btn-close" data-bs-dismiss="alert">',
    '      <span class="visually-hidden">Close</span>',
    '   </button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success', 'Success')
  })
}
```

<!-- Boosted mod: no Link color -->

<!-- Boosted mod: small alerts -->
### Sizes

Alerts come with a smaller variant: `.alert-sm`.

{{< example >}}
<div class="alert alert-success alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>
{{< /example >}}
<!-- End mod -->

### Additional content

Alerts can also contain additional HTML elements like headings, links and paragraphs.

{{< example >}}
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <div>
    <h4 class="alert-heading">Success notification text with <a href="#">a link</a> goes here.</h4>
    <p>Description text with <a href="#">a link</a> goes here.</p>
  </div>
</div>
{{< /example >}}

<!-- Boosted mod: no icons -->

### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled Boosted JavaScript.
- Add a [close button]({{< docsref "/components/close-button" >}}) and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
- On the close button, add the `data-bs-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert"><span class="visually-hidden">Close</span></button>
</div>
{{< /example >}}

{{< callout warning >}}
When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.
{{< /callout >}}

### Dark variant

Add `.bg-dark` to the `.alert` for a dark variant. Close button can be inverted as well by using the [dark variant of close button]({{< docsref "/components/close-button#dark-variant" >}})

{{< example class="bg-dark" >}}
<div class="alert alert-success bg-dark" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-success bg-dark" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <div>
    <h4 class="alert-heading">Success notification text with <a href="#">a link</a> goes here.</h4>
    <p>Description text with <a href="#">a link</a> goes here.</p>
  </div>
</div>
<div class="alert alert-warning alert-dismissible fade show bg-dark" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert"><span class="visually-hidden">Close</span></button>
</div>
{{< /example >}}

## CSS

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, alerts now use local CSS variables on `.alert` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="alert-css-vars" file="scss/_alert.scss" >}}

### Sass variables

{{< scss-docs name="alert-variables" file="scss/_variables.scss" >}}

### Sass mixin

Used in combination with `$theme-colors` to create contextual modifier classes for our alerts.

{{< scss-docs name="alert-variant-mixin" file="scss/mixins/_alert.scss" >}}

### Sass loop

Loop that generates the modifier classes with the `alert-variant()` mixin.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

## JavaScript behavior

### Initialize

Initialize elements as alerts

```js
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new boosted.Alert(element))
```

{{< callout info >}}
For the sole purpose of dismissing an alert, it isn't necessary to initialize the component manually via the JS API. By making use of `data-bs-dismiss="alert"`, the component will be initialized automatically and properly dismissed.

See the [triggers](#triggers) section for more details.
{{< /callout >}}

### Triggers

{{% js-dismiss "alert" %}}

**Note that closing an alert will remove it from the DOM.**

### Methods

You can create an alert instance with the alert constructor, for example:

```js
const bsAlert = new boosted.Alert('#myAlert')
```

This makes an alert listen for click events on descendant elements which have the `data-bs-dismiss="alert"` attribute. (Not necessary when using the data-api’s auto-initialization.)

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `close` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |
| `dispose` | Destroys an element's alert. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the alert instance associated to a DOM element. For example: `boosted.Alert.getInstance(alert)`. |
| `getOrCreateInstance` | Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `boosted.Alert.getOrCreateInstance(element)`. |
{{< /bs-table >}}

Basic usage:

```js
const alert = boosted.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

### Events

Boosted's alert plugin exposes a few events for hooking into alert functionality.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `close.bs.alert` | Fires immediately when the `close` instance method is called. |
| `closed.bs.alert` | Fired when the alert has been closed and CSS transitions have completed. |
{{< /bs-table >}}

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
