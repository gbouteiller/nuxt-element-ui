# nuxt-element-ui

[![npm](https://img.shields.io/npm/dt/nuxt-element-ui.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-element-ui) [![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-element-ui/latest.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-element-ui) [![NpmLicense](https://img.shields.io/npm/l/nuxt-element-ui.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-element-ui)

> Add [ElementUI](https://github.com/ElemeFE/element) A Vue.js 2.0 UI Toolkit for Web to Nuxt.

## Setup

- Add `nuxt-element-ui` dependency using yarn or npm to your project

```shell
yarn add nuxt-element-ui
```

- Add `nuxt-element-ui` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-element-ui'
  ],

  elementUI: {
    components: ['Button', 'DatePicker'],
    locale: 'fr',
  },
}
```

or

```js
{
  modules: [
    [
      'nuxt-element-ui',
      {
        components: ['Button', 'DatePicker'],
        locale: 'fr',
      },
    ],
  ],
}
```

- Add **Element UI** styles.

## Options

### `components`

- **optional**
- Type: `string[]`
- Default: `[]`

Adds specific **ElementUI Components** to your project. If `components` is empty, all components will be imported.

### `locale`

- **optional**
- Type: `string`
- Default: `en`

Sets elementUI locale globally.

## Usage

Simply use **ElementUI Components** inside your single file components.

`my-component.vue`:

```html
<template>
<el-button>Button</el-button>
</template>
```

## License

[MIT](https://github.com/gbouteiller/nuxt-element-ui/blob/master/LICENSE) License
