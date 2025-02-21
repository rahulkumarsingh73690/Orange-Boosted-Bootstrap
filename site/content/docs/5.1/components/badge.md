---
layout: docs
title: Badges
description: Documentation and examples for badges, our small count and labeling component.
group: components
toc: true
---

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units. As of v5, badges no longer have focus or hover styles for links.

### Headings

{{< example >}}
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
{{< /example >}}

### Buttons

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>
{{< /example >}}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.

### Positioned

<!-- Boosted mod: replace the button with a link with an icon because notifiers are only authorized with icons -->

Use utilities to modify a `.badge` and position it in the corner of a link with an icon.

{{< example >}}
<a href="#" class="position-relative">
  <svg width="2rem" height="2rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
  </svg>
  <span class="visually-hidden">Shopping basket</span>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
    99+
    <span class="visually-hidden">shopping basket items</span>
  </span>
</a>
{{< /example >}}

<!-- The example without a count is dropped because not existing in the UI kit -->

<!-- End mod -->

## Background colors

{{< added-in "5.2.0" >}}

Set a `background-color` with contrasting foreground `color` with [our `.text-bg-{color}` helpers]({{< docsref "helpers/color-background" >}}). Previously it was required to manually pair your choice of [`.text-{color}`]({{< docsref "/utilities/colors" >}}) and [`.bg-{color}`]({{< docsref "/utilities/background" >}}) utilities for styling, which you still may use if you prefer.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge text-bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill text-bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, badges now use local CSS variables on `.badge` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="badge-css-vars" file="scss/_badge.scss" >}}

### Sass variables

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}
