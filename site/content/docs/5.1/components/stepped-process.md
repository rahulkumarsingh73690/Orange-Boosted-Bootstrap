---
layout: docs
title: Stepped process
description: Stepped process bar used for multiple steps forms process
group: components
aliases:
  - "/docs/components/stepped-process/"
toc: true
---

## How to use

Use a `nav` element with `.stepped-process` class, containing an ordered list `<ol>` with `.stepped-process-item` class on list items.

Use short labels for each step, otherwise they will be cut off to preserve inline layout. More information can be carried on the `title` attribute of the `.stepped-process-link`.

Add `.active` to a `.stepped-process-item` to indicate the current step, alongside `aria-current="step"` to convey the active state to assistive technologies.

## Example

{{< example >}}
<nav class="stepped-process" aria-label="Checkout process">
  <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
  <ol>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
    </li>
    <li class="stepped-process-item active">
      <a class="stepped-process-link" href="#" title="2. Review" aria-current="step">Review</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
    </li>
    <li class="stepped-process-item">
      <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
    </li>
  </ol>
</nav>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="stepped-process" file="scss/_variables.scss" >}}
