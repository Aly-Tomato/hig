# [@hig/icons-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/icons@0.2.1...@hig/icons@1.0.0) (2018-12-04)


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

# [@hig/icons-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/icons@0.2.0...@hig/icons@0.2.1) (2018-10-08)


### Bug Fixes

* replace stroke icons with fill ([5e06c82](https://github.com/Autodesk/hig/commit/5e06c82))

# [@hig/icons-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/icons@0.1.0...@hig/icons@0.2.0) (2018-08-07)


### Features

* update icon set ([80bf8c6](https://github.com/Autodesk/hig/commit/80bf8c6))
