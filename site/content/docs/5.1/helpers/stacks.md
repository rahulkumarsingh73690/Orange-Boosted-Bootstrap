---
layout: docs
title: Stacks
description: Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
group: helpers
toc: true
added: "5.1"
---

Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Boosted. All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

{{< callout warning >}}
Heads up! Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues. [Read more](https://caniuse.com/flexbox-gap).
{{< /callout >}}

## Vertical

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

<!-- Boosted mod: light border -->
{{< example >}}
<div class="vstack gap-3">
  <div class="bg-light border border-light">First item</div>
  <div class="bg-light border border-light">Second item</div>
  <div class="bg-light border border-light">Third item</div>
</div>
{{< /example >}}

## Horizontal

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

<!-- Boosted mod: light border -->
{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border border-light">First item</div>
  <div class="bg-light border border-light">Second item</div>
  <div class="bg-light border border-light">Third item</div>
</div>
{{< /example >}}

Using horizontal margin utilities like `.ms-auto` as spacers:

<!-- Boosted mod: light border -->
{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border border-light">First item</div>
  <div class="bg-light border border-light ms-auto">Second item</div>
  <div class="bg-light border border-light">Third item</div>
</div>
{{< /example >}}

And with [vertical rules]({{< docsref "/helpers/vertical-rule" >}}):

<!-- Boosted mod: light border -->
{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border border-light">First item</div>
  <div class="bg-light border border-light ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border border-light">Third item</div>
</div>
{{< /example >}}

## Examples

Use `.vstack` to stack buttons and other elements:

<!-- Boosted mod: primary and secondary buttons -->
{{< example >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn btn-secondary">Cancel</button>
</div>
{{< /example >}}

Create an inline form with `.hstack`:

<!-- Boosted mod: primary and secondary button -->
{{< example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-primary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-secondary">Reset</button>
</div>
{{< /example >}}

## Sass

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}
