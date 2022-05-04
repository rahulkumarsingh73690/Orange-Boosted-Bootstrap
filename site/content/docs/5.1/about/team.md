---
layout: docs
title: Team
description: An overview of the founding team and core contributors to Boosted.
group: about
aliases:
  - "/docs/about/team/"
---

Boosted is maintained by the founding team and a small group of invaluable core contributors, with the massive support and involvement of our community.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

Get involved with Boosted development by [opening an issue]({{< param repo >}}/issues/new) or submitting a pull request. Read our [contributing guidelines]({{< param repo >}}/blob/v{{< param current_version >}}/.github/CONTRIBUTING.md) for information on how we develop.

{{< callout info >}}
## Bootstrap team

Boosted is based on [Bootstrap]({{< param bootstrap >}}) —&nbsp;maintained by [its founding team and a small group of invaluable core contributors]({{< param bootstrap >}}/docs/{{< param docs_version >}}/about/team/), with the massive support and involvement of their community, **including some proud Boosted maintainers and contributors**.
{{< /callout >}}
