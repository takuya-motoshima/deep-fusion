# Changelog
All notable changes to this project will be documented in this file.

## [1.0.2] - 2023/8/24
### Fixed
- Fixed a bug that prevented proper import due to a broken module.

## [1.0.1] - 2023/8/23
### Changed
- The method of retrieving modules has been changed.  
    See [README.md](README.md) for instructions on how to use the new version.

    New:
    ```js
    const {merge} = require('deep-fusion');

    const a = {hello: 1};
    const b = {world: 2};
    merge(a, b);
    ```

    Previous:
    ```js
    const merge = require('deep-fusion');

    const a = {hello: 1};
    const b = {world: 2};
    merge(a, b);
    ```

### Fixed
- Fixed a bug that caused the original object to change when merging.  
    In the new version, you can get the merged object without changing the original object.

## [1.0.0] - 2022/7/29
### Fixed
- Released.

[1.0.1]: https://github.com/takuya-motoshima/deep-fusion/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/takuya-motoshima/deep-fusion/compare/v1.0.1...v1.0.2