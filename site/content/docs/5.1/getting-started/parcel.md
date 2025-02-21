---
layout: docs
title: Parcel
description: Learn how to include Boosted in your project using Parcel.
group: getting-started
toc: true
---

## Install Parcel

Install [Parcel Bundler](https://parceljs.org/getting-started/webapp/).

## Install Boosted

[Install boosted]({{< docsref "/getting-started/download#npm" >}}) as a Node.js module using npm.

Boosted depends on [Popper](https://popper.js.org/), which is specified in the `peerDependencies` property. This means that you will have to make sure to add both of them to your `package.json` using `npm install @popperjs/core`.

When all will be completed, your project will be structured like this:

```text
project-name/
├── build/
├── node_modules/
│   └── boosted/
│   └── @popperjs/
|       └── core/
├── scss/
│   └── custom.scss
├── src/
│   └── index.html
│   └── index.js
└── package.json
```

## Importing JavaScript

Import [Boosted's JavaScript]({{< docsref "/getting-started/javascript" >}}) in your app's entry point (usually `src/index.js`). You can import all our plugins in one file or separately if you require only a subset of them.

<!-- eslint-skip -->
```js
// Import all plugins
import * as boosted from 'boosted';

// Or import only needed plugins
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'boosted';

// Or import just one
import Alert as Alert from '../node_modules/boosted/js/dist/alert';
```

## Importing CSS

To utilize the full potential of Boosted and customize it to your needs, use the source files as a part of your project's bundling process.

Create your own `scss/custom.scss` to [import Boosted's Sass files]({{< docsref "/customize/sass#importing" >}}) and then override the [built-in custom variables]({{< docsref "/customize/sass#variable-defaults" >}}).

## Build app

Include `src/index.js` before the closing `</body>` tag.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

### Edit `package.json`

Add `dev` and `build` scripts in your `package.json` file.

```json
"scripts": {
  "dev": "parcel ./src/index.html",
  "prebuild": "npx rimraf build",
  "build": "parcel build --public-url ./ ./src/index.html --dist-dir build"
}
```

### Run dev script

Your app will be accessible at `http://127.0.0.1:1234`.

```sh
npm run dev
```

### Build app files

Built files are in the `build/` folder.

```sh
npm run build
```
