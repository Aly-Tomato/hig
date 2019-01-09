# [@hig/typography-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.4...@hig/typography@1.0.0) (2019-01-09)


### Bug Fixes

* add 600 to valid typography font weights ([5552838](https://github.com/Autodesk/hig/commit/5552838))


### Features

* a new API for Typography ([a589155](https://github.com/Autodesk/hig/commit/a589155)), closes [#222934](https://github.com/Autodesk/hig/issues/222934)
* allow Typography to accept arbitrary props ([0b5617a](https://github.com/Autodesk/hig/commit/0b5617a))
* enable passing elementType to Typography ([6025d97](https://github.com/Autodesk/hig/commit/6025d97))


### BREAKING CHANGES

* Typography 0.1.4 to 1.0.0 Migration

This update contains significant breaking changes to the Typography API.
Most notably, the helper Typography components `Bold`, `Body`,
`Caption`, `Disabled`, `H1`, `H2`, `H3`, `Sub1`, `Sub2`, or `Text` no
longer exist. You can achieve the same behavior with...

* `<Bold text="hi" />`
  ->
  `<Typography fontWeight="bold">hi</Typography>`

* `<Body text="hi" />`
   ->
  `<Typography>hi</Typography>` or
  `<Typography variant="body">hi</Typography>`

* `<Caption text="hi" />`
  ->
  `<Typography variant="caption">hi</Typography>`

* `<Disabled text="hi" />`
  ->
  `<Typography disabled={true}>hi</Typography>`

* `<H1 text="hi" />`
  ->
  `<Typography variant="h1">hi</Typography>`

* `<H2 text="hi" />`
  ->
  `<Typography variant="h2">hi</Typography>`

* `<H3 text="hi" />`
  ->
  `<Typography variant="h3">hi</Typography>`

* `<Text text="hi"/>`
  ->
  `<Typography>hi</Typography>` or
  `<Typography variant="body">hi</Typography>`

`<Sub1 />` and `<Sub2 />` can be achieved by using the style prop with
any styles needed. For instance to get the old `<Sub1 />` look, use...
```

# [@hig/typography-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.3...@hig/typography@0.1.4) (2018-08-23)


### Bug Fixes

* headers can have colors ([f49276f](https://github.com/Autodesk/hig/commit/f49276f))

<a name="@hig/typography-v0.1.3"></a>
# [@hig/typography-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.2...@hig/typography@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/typography-v0.1.2"></a>
# [@hig/typography-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.1...@hig/typography@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
