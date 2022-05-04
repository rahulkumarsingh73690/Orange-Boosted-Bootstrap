---
layout: docs
title: Tables
description: Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Boosted.
group: content
toc: true
---

## Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, Boosted's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Boosted, meaning any nested tables can be styled independent from the parent.

Using the most basic table markup, here's how `.table`-based tables look in Boosted.

{{< table class="table" simplified="false" aria="Boosted tables basic look - table with one level of column header" >}}

## Accessibility

For the table's accessibility, there are four main rules.

The first rule is about keyboard users. To make it accessible for every users, add `tabindex="0"` attribute to the `div` tag or to the `table` tag at least.

The second rule is to give a role to the table. To do it, add `role="region"` to the `div` tag.

The third one is about the readability of the table itself. Add `scope="col"` or `scope="row"` attribute to the tags when needed.

To complete the rules, if the `caption` isn't there or isn't enough to describe, add an `aria-label` attribute to describe the table. The `aria-label` should match the following pattern : `aria-label="Table's data description - Table's metadata description (e.g. : table with one level of column header)"`.
Otherwise, if the caption is enough add an `aria-labelledby="idCaption"` to describe the table.

See [more about the tables structures](https://a11y-guidelines.orange.com/fr/web/developper/contenu-textuel/#structurer-les-tableaux-de-donnees).

## Variants

<!-- Boosted mod: only .table-dark is allowed -->
Use contextual class to color tables, table rows or individual cells.

<div class="bd-example">
<div tabindex="0" role="region" aria-label="Table's data description - Table's metadata description e.g : table with one level of row and column header">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    <tr class="table-dark">
      <th scope="row">Dark</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    </tbody>
  </table>
</div>
</div>

{{< highlight html >}}
<!-- On tables -->
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-dark">...</td>
</tr>
{{< /highlight >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Accented tables

### Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{{< table class="table table-striped" aria="Bootstrap's developers - table with one level of row and column header" >}}

These classes can also be added to table variants:

{{< table class="table table-dark table-striped" aria="Bootstrap's developers - table with one level of row and column header" >}}

<!-- Boosted mod : no .table-striped-columns -->

<!-- Boosted mod : no .table-success -->

### Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{{< table class="table table-hover" aria="Bootstrap's developers - table with one level of row and column header" >}}

{{< table class="table table-dark table-hover" aria="Bootstrap's developers - table with one level of row and column header" >}}

These hoverable rows can also be combined with the striped rows variant:

{{< table class="table table-striped table-hover" aria="Bootstrap's developers - table with one level of row and column header" >}}

{{< table class="table table-dark table-striped table-hover" aria="Bootstrap's developers - table with one level of row and column header" >}}

### Active tables

Highlight a table row or cell by adding a `.table-active` class.

<div class="bd-example">
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
```

<div class="bd-example">
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
<table class="table table-dark">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
```

## How do the variants and accented tables work?

For the accented tables (([striped rows](#striped-rows), [striped columns](#striped-columns), [hoverable rows](#hoverable-rows) and [active tables](#active-tables)), we used some techniques to make these effects work for all our [table variants](#variants):

- We start by setting the background of a table cell with the `--bs-table-bg` custom property. All table variants then set that custom property to colorize the table cells. This way, we don't get into trouble if semi-transparent colors are used as table backgrounds.
- Then we add an inset box shadow on the table cells with `box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);` to layer on top of any specified `background-color`. Because we use a huge spread and no blur, the color will be monotone. Since `--bs-table-accent-bg` is unset by default, we don't have a default box shadow.
- When either `.table-striped`, `.table-striped-columns`, `.table-hover` or `.table-active` classes are added, the `--bs-table-accent-bg` is set to a semitransparent color to colorize the background.
- For each table variant, we generate a `--bs-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-dark` has a lighter accent color.
- Text and border colors are generated the same way, and their colors are inherited by default.

Behind the scenes it looks like this:

{{< scss-docs name="table-variant" file="scss/mixins/_table-variants.scss" >}}

<!-- Boosted mod : No table borders -->

## Small tables

Add `.table-sm` to make any `.table` more compact by cutting all cell `padding` in half.

{{< table class="table table-sm" aria="Bootstrap's developers - table with one level of row and column header" >}}

{{< table class="table table-dark table-sm" aria="Bootstrap's developers - table with one level of row and column header" >}}

<!-- Boosted mod : No table group dividers -->

## Table group dividers

Add a thicker border, darker between table groups—`<thead>`, `<tbody>`, and `<tfoot>`—with `.table-group-divider`. Customize the color by changing the `border-top-color` (which we don't currently provide a utility class for at this time).

{{< example >}}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Vertical alignment

Table cells of `<thead>` are always vertical aligned to the bottom. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the top by default. Use the [vertical align]({{< docsref "/utilities/vertical-align" >}}) classes to re-align where needed.

<div class="bd-example">
  <div class="table-responsive" tabindex="0" role="region" aria-label="Vertical alignment examples - table with one level of column header">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Heading 1</th>
          <th scope="col" class="w-25">Heading 2</th>
          <th scope="col" class="w-25">Heading 3</th>
          <th scope="col" class="w-25">Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr class="align-bottom">
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive" tabindex="0" role="region" aria-label="Vertical alignment examples - table with one level of column header">
  <table class="table align-middle">
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

<div class="bd-example">
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td colspan="4">
        <table class="table mb-0" tabindex="0" role="region" aria-label="Example of nesting - table with one level of row and column header">
          <thead>
            <tr>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A</th>
              <td>First</td>
              <td>Last</td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>First</td>
              <td>Last</td>
            </tr>
            <tr>
              <th scope="row">C</th>
              <td>First</td>
              <td>Last</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</div>

```html
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
<table class="table table-striped table-dark">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0" tabindex="0" role="region" aria-label="Example of nesting - table with one level of row and column header">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
</div>
```

## How nesting works

To prevent _any_ styles from leaking to nested tables, we use the child combinator (`>`) selector in our CSS. Since we need to target all the `td`s and `th`s in the `thead`, `tbody`, and `tfoot`, our selector would look pretty long without it. As such, we use the rather odd looking `.table > :not(caption) > * > *` selector to target all `td`s and `th`s of the `.table`, but none of any potential nested tables.

Note that if you add `<tr>`s as direct children of a table, those `<tr>` will be wrapped in a `<tbody>` by default, thus making our selectors work as intended.

## Anatomy

<!-- Boosted mod : no table head or table foot -->

### Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

<div class="bd-example">
  <div tabindex="0" role="region" aria-labelledby="idCaption1">
    <table class="table">
      <caption id="idCaption1">List of users</caption>
      {{< partial "table-content" >}}
    </table>
  </div>
</div>

```html
<div tabindex="0" role="region" aria-labelledby="idCaption1">
<table class="table table-sm">
  <caption id="idCaption1">List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
</div>
```

<!-- Boosted mod: default caption-side is top -->
You can also put the `<caption>` on the bottom of the table with `.caption-bottom`.

<div class="bd-example">
  <div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
    <table class="table caption-bottom">
      <caption aria-hidden="true">List of users</caption>
      {{< partial "table-content" >}}
    </table>
  </div>
</div>

```html
<div tabindex="0" role="region" aria-label="Bootstrap's developers - table with one level of row and column header">
<table class="table caption-bottom">
  <caption aria-hidden="true">List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
</div>
```

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl|-xxl}`.

{{< callout warning >}}
##### Vertical clipping/truncation

Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.
{{< /callout >}}

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

<div class="bd-example">
  <div class="table-responsive" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of row and column header">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of row and column header">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl|-xxl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**

{{< tables.inline >}}
{{ range $.Site.Data.breakpoints }}
{{ if not (eq . "xs") }}
<div class="bd-example">
  <div class="table-responsive{{ .abbr }}" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of row and column header">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}

{{< highlight html >}}
{{< tables.inline >}}
{{- range $.Site.Data.breakpoints -}}
{{- if not (eq . "xs") }}
<div class="table-responsive{{ .abbr }}" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of row and column header">
  <table class="table">
    ...
  </table>
</div>
{{ end -}}
{{- end -}}
{{< /tables.inline >}}
{{< /highlight >}}

## Sizing

### Sizes

Use `.table-height-{sm|md|lg}` on the container of the table to limit the height of the table. Up to the limited height, the table will overflow its content. Add the attribute `tabindex="0"` for the accessibility on all browsers.

<div class="bd-example">
  <div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="bd-example">
  <div class="table-height-md" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="bd-example">
  <div class="table-height-lg" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table">
    ...
  </table>
</div>
<div class="table-height-md" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table">
    ...
  </table>
</div>
<div class="table-height-lg" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table">
    ...
  </table>
</div>
```

### Sticky thead

Add `.table-sticky` to the table element in order to have the first row sticking to the top of the table. The sticky effect has no effect on a non-scrollable table.

<div class="bd-example">
  <div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
    <table class="table table-sticky">
      <thead>
        <tr>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-sticky">
    ...
  </table>
</div>
```

Works also with variants :

<div class="bd-example">
  <div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
    <table class="table table-sticky table-dark">
      <thead>
        <tr>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-height-sm" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-dark table-sticky">
    ...
  </table>
</div>
```

## Rich content tables

### Row selection
Add a [`.form-check` div]({{< docsref "/forms/checks-radios#checks" >}}) within `<th>` and `<td>` to display checkboxes and use the `checked` attribute.

{{< callout info >}}
#### Selection feature

The selection behavior isn't implemented yet. This feature will be delivered with [#410]({{< param repo >}}/issues/410) as an example.
{{< /callout >}}

<div class="bd-example" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-sm table-hover table-responsive">
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck">
            <label class="form-check-label" for="customCheck">
              <span class="visually-hidden">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">  Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck1">
            <label class="form-check-label" for="customCheck1">
                <span class="visually-hidden">Select first row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck2">
            <label class="form-check-label" for="customCheck2">
                <span class="visually-hidden">Select second row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck3" checked>
            <label class="form-check-label" for="customCheck3">
                <span class="visually-hidden">Select third row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck4" checked>
            <label class="form-check-label" for="customCheck4">
                <span class="visually-hidden">Select fourth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
            <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck5">
            <label class="form-check-label" for="customCheck5">
                <span class="visually-hidden">Select fifth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck6">
            <label class="form-check-label" for="customCheck6">
                <span class="visually-hidden">Select sixth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck7">
            <label class="form-check-label" for="customCheck7">
                <span class="visually-hidden">Select seventh row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck8">
            <label class="form-check-label" for="customCheck8">
                <span class="visually-hidden">Select eighth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-sm table-hover table-responsive">
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck">
            <label class="form-check-label" for="customCheck">
              <span class="visually-hidden">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck1">
            <label class="form-check-label" for="customCheck1">
                <span class="visually-hidden">Select first row</span>
            </label>
          </div>
        </td>
        ...
      </tr>
      <tr>...</tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck3" checked>
            <label class="form-check-label" for="customCheck3">
                <span class="visually-hidden">Select third row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">...</tr>
      <tr>...</tr>
      <tr>...</tr>
      <tr>...</tr>
      <tr>...</tr>
    </tbody>
  </table>
</div>
```

### With icons or thumbnails

Use SVG to display thumbnails or icons in your table data cell elements.

<div class="bd-example" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-sm table-hover table-responsive align-middle">
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck9">
            <label class="form-check-label" for="customCheck9">
              <span class="visually-hidden">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck10">
            <label class="form-check-label" for="customCheck10">
              <span class="visually-hidden">Select first row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-labelledby="svg1">
            <title id="svg1">Thumbnail</title>
            <rect width="100%" height="100%" fill="#ffd200"></rect>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck11">
            <label class="form-check-label" for="customCheck11">
              <span class="visually-hidden">Select second row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg2">
            <title id="svg2">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck12" checked>
            <label class="form-check-label" for="customCheck12">
              <span class="visually-hidden">Select third row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="svg3">
            <title id="svg3">Thumbnail</title>
            <rect width="100%" height="100%" fill="#4bb4e6"></rect>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck13" checked>
            <label class="form-check-label" for="customCheck13">
              <span class="visually-hidden">Select fourth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg4">
            <title id="svg4">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
            <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck14">
            <label class="form-check-label" for="customCheck14">
              <span class="visually-hidden">Select fifth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg5">
            <title id="svg5">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck15">
            <label class="form-check-label" for="customCheck15">
              <span class="visually-hidden">Select sixth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg6">
            <title id="svg6">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck16">
            <label class="form-check-label" for="customCheck16">
              <span class="visually-hidden">Select seventh row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg7">
            <title id="svg7">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck17">
            <label class="form-check-label" for="customCheck17">
              <span class="visually-hidden">Select eighth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg8">
            <title id="svg8">Document</title>
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<td>
  <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-labelledby="svg1">
    <title id="svg1">Thumbnail</title>
    <rect width="100%" height="100%" fill="#ffd200"></rect>
  </svg>
  Cell text
</td>
<td>
  <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" class="me-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg2">
    <title id="svg2">Document</title>
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#document"></use>
  </svg>
  Cell text
</td>
```

<div class="bd-example" tabindex="0" role="region" aria-label="Example table with heading/cell content - table with one level of column header">
  <table class="table table-responsive align-middle">
    <thead>
      <tr>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check1-1">
            <title id="check1-1">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check1-2">
            <title id="check1-2">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check1-3">
            <title id="check1-3">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check2-1">
            <title id="check2-1">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check2-2">
            <title id="check2-2">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check2-3">
            <title id="check2-3">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check3-1">
            <title id="check3-1">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check3-2">
            <title id="check3-2">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check4-1">
            <title id="check4-1">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check4-2">
            <title id="check4-2">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td></td>
        <td></td>
        <td>
         <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check5">
           <title id="check5">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal">Cell text</th>
        <td></td>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check6">
            <title id="check6">Yes</title>
            <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
</div>

```html
<td>
  <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" role="img" aria-labelledby="check1-1">
    <title id="check1-1">Yes</title>
    <use style="color: var(--bs-success);" xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"></use>
  </svg>
</td>
```

## Sass

### Variables

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}

### Loop

{{< scss-docs name="table-loop" file="scss/_variables.scss" >}}

### Customizing

The factor variables (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) are used to determine the contrast in table variants.
<!-- Boosted mod: no table variant apart from dark and light -->
