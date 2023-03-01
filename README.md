<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Read File

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read the entire contents of a file.











<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/fs-read-file-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: read-file [options] <filepath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding.
         --flag flag           Flag. Default: 'r'.
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Relative file paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   File contents are written to `stdout`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ read-file ./README.md
<file_contents>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/fs-read-file`][@stdlib/fs-read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>
-   <span class="package-name">[`@stdlib/fs-exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs-open`][@stdlib/fs/open]</span><span class="delimiter">: </span><span class="description">open a file.</span>
-   <span class="package-name">[`@stdlib/fs-read-dir`][@stdlib/fs/read-dir]</span><span class="delimiter">: </span><span class="description">read the entire contents of a directory.</span>
-   <span class="package-name">[`@stdlib/fs-read-json`][@stdlib/fs/read-json]</span><span class="delimiter">: </span><span class="description">read a file as JSON.</span>
-   <span class="package-name">[`@stdlib/fs-write-file`][@stdlib/fs/write-file]</span><span class="delimiter">: </span><span class="description">write data to a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-file-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-file-cli

[test-image]: https://github.com/stdlib-js/fs-read-file/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-read-file/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-file/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-file?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-file.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-file/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/fs-read-file#cli
[cli-url]: https://github.com/stdlib-js/fs-read-file/tree/cli
[@stdlib/fs-read-file]: https://github.com/stdlib-js/fs-read-file/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-read-file/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-read-file/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-read-file/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-read-file/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-read-file/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists

[@stdlib/fs/open]: https://github.com/stdlib-js/fs-open

[@stdlib/fs/read-dir]: https://github.com/stdlib-js/fs-read-dir

[@stdlib/fs/read-json]: https://github.com/stdlib-js/fs-read-json

[@stdlib/fs/write-file]: https://github.com/stdlib-js/fs-write-file

<!-- </related-links> -->

</section>

<!-- /.links -->
