---
layout: docs
title: Opacity
description: Control the opacity of elements.
group: utilities
aliases:
  - "/docs/utilities/opacity/"
---

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

<!--
  Boosted mod:
  - Removed .text-light and .rounded classes
  - Removed div text content to avoid a11y issue with semi-transparent text
-->
<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-75 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-50 p-3 m-2 bg-primary fw-bold"></div>
  <div class="opacity-25 p-3 m-2 bg-primary fw-bold"></div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
```

### Utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}
