# [@hig/banner-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/banner@1.0.0...@hig/banner@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/banner-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.6...@hig/banner@1.0.0) (2018-12-04)


### BREAKING

* **icon/icon-button:** Removes [@hig](https://github.com/hig)/icon and refactor [@hig](https://github.com/hig)/icon-button to use [@hig](https://github.com/hig)/icons ([49d78f4](https://github.com/Autodesk/hig/commit/49d78f4))


### Bug Fixes

* **storybook:** Add back Icon stories ([f38f2d4](https://github.com/Autodesk/hig/commit/f38f2d4))


### BREAKING CHANGES

* **icon/icon-button:** Removes @hig/icon
* **icon/icon-button:** Use icon prop instead of name or svg in @hig/icon-button to render Icon/svg
* **icon/icon-button:** No longer export `names` from @hig/icon-button

Usage:
```
import { Assets24 } from "@hig/icons"

function MyComponent() {
  return (
    <IconButton
      icon={<Assets24 />}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```

# [@hig/banner-v0.1.6](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.5...@hig/banner@0.1.6) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/banner-v0.1.5](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.4...@hig/banner@0.1.5) (2018-08-07)


### Bug Fixes

* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))

<a name="@hig/banner-v0.1.4"></a>
# [@hig/banner-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.3...@hig/banner@0.1.4) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/banner-v0.1.3"></a>
# [@hig/banner-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.2...@hig/banner@0.1.3) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
