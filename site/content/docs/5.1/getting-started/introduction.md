---
layout: docs
title: Get started with Boosted
description: Boosted is based on Bootstrap&#58; a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
group: getting-started
aliases:
  - "/docs/5.1/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

Get started by including Boosted's production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this [Boosted CodePen demo](https://codepen.io/julien-deramond/pen/WNMxywB).

<br>

1. **Create a new `index.html` file in your project root.** Include the `<meta name="viewport>` tag as well for [proper responsive behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in mobile devices.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Boosted demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
     </body>
   </html>
   ```

2. **Include Boosted's CSS and JS.** Place the `<link>` tag in the `<head>` for our CSS, and the `<script>` tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing `</body>`. Learn more about our [CDN links](#cdn-links).

   Boosted also provides Helvetica Neue fonts, **limited to Orange brand usage**: [see `NOTICE.txt` for more information about Helvetica Neue license]({{< param repo >}}/blob/v{{< param current_version >}}/NOTICE.txt).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Boosted demo</title>
       <!-- Copyright © 2014 Monotype Imaging Inc. All rights reserved -->
       <link href="{{< param "cdn.helvetica" >}}" rel="stylesheet" integrity="{{< param "cdn.helvetica_hash" >}}" crossorigin="anonymous">
       <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
     </head>
     <body>
       <h1>Hello, world!</h1>
       <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
     </body>
   </html>
   ```

   You can also include [Popper](https://popper.js.org/) and our JS separately. If you don't plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.

   ```html
   <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
   <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
   ```

3. **Hello, world!** Open the page in your browser of choice to see your Boosted page. Now you can start building with Boosted by creating your own [layout]({{< docsref "/layout/grid" >}}), adding dozens of [components]({{< docsref "/components/buttons" >}}), and utilizing [our official examples]({{< docsref "/examples" >}}).

## CDN links

As reference, here are our primary CDN links.

{{< bs-table >}}
| Description | URL |
| --- | --- |
| CSS | `{{< param "cdn.css" >}}` |
| CSS for Helvetica Neue | `{{< param "cdn.helvetica" >}}` |
| JS | `{{< param "cdn.js_bundle" >}}` |
{{< /bs-table >}}

You can also use the CDN to fetch any of our [additional builds listed in the Contents page]({{< docsref "/getting-started/contents" >}}).

## Next steps

- Read a bit more about some [important global environment settings](#important-globals) that Boosted utilizes.

- Read about what's included in Boosted in our [contents section]({{< docsref "/getting-started/contents#precompiled-boosted" >}}) and the list of [components that require JavaScript](#js-components) below.

- Need a little more power? Consider building with Boosted by [including the source files via package manager]({{< docsref "/getting-started/download#package-managers" >}}).

- Looking to use Boosted as a module with `<script type="module">`? Please refer to our [using Boosted as a module]({{< docsref "/getting-started/javascript#using-boosted-as-a-module" >}}) section.

## JS components

Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

<details class="mb-3 border-top border-bottom border-1 border-light">
<summary class="h3 p-2 mb-0">Show components requiring JavaScript</summary>
{{< markdown >}}
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Footer for extending our Collapse plugin to implement responsive behavior
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors
- Navs with the Tab plugin for toggling content panes
- Offcanvases for displaying, positioning, and scroll behavior
- Orange navbar for minimizing the header
- Quantity selector for incrementing/decrementing number value
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
{{< /markdown >}}
</details>

{{< callout warning >}}
#### Required script

Boosted includes [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.
However, if you don't need or want to use Boosted's JavaScript files, you'll still need to use the polyfill.
```html
<script src="{{< param "cdn.focus_visible" >}}" integrity="{{< param "cdn.focus_visible_hash" >}}" crossorigin="anonymous"></script>
```
{{< /callout >}}

## Important globals

Boosted employs a handful of important global styles and settings, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Boosted requires the use of the HTML5 doctype. Without it, you'll see some funky and incomplete styling.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Boosted is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [quick start](#quick-start).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).


### Resource Hints

[Resource hints](https://www.w3.org/TR/resource-hints/) are meant to optimize browser loading strategy, by either preloading assets, prefetching DNS or preconnecting to domains — but please use them carefully and **only to hint resources you'll really be using soon**.
It should be used for critical resources only.

#### `preload` fonts

```html
<link rel="preload" href="dist/fonts/HelvNeue75_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="dist/fonts/HelvNeue55_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

#### `preconnect` to CDNs

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous">
```

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Bootstrap Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Read and subscribe to [The Official Bootstrap Blog]({{< param blog >}}).
- Join [the official Slack room]({{< param slack >}}).
- Chat with fellow Bootstrappers in IRC. On the `irc.libera.chat` server, in the `#bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Developers should use the keyword `bootstrap` on packages that modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/{{< param twitter >}}) for the latest gossip and awesome music videos.
