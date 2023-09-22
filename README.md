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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Read File

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read the entire contents of a file.



<section class="usage">

## Usage

```javascript
import readFile from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { sync } from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@deno/mod.js';
```

#### readFile( file\[, options], clbk )

Asynchronously reads the entire contents of a file.

```javascript
readFile( __filename, onFile );

function onFile( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

The function accepts the same `options` and has the same defaults as [`fs.readFile()`][node-fs].

#### readFile.sync( file\[, options] )

Synchronously reads the entire contents of a `file`.

```javascript
var out = readFile.sync( __filename );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` and has the same defaults as [`fs.readFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.readFileSync()`][node-fs] is that [`fs.readFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this API will return an `error`. Hence, the following anti-pattern


    ```javascript
    var fs = require( 'fs' );

    var file = '/path/to/file.js';

    // Check for existence to prevent an error being thrown...
    if ( fs.existsSync( file ) ) {
        file = fs.readFileSync( file );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    ```javascript
    import readFile from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@deno/mod.js';

    var file = '/path/to/file.js';

    // Explicitly handle the error...
    file = readFile.sync( file );
    if ( file instanceof Error ) {
        // You choose what to do...
        console.error( file.message );
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import readFile from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@deno/mod.js';

/* Sync */

var file = readFile.sync( __filename, 'utf8' );
// returns <string>

console.log( file instanceof Error );
// => false

file = readFile.sync( 'beepboop', {
    'encoding': 'utf8'
});
// returns <Error>

console.log( file instanceof Error );
// => true

/* Async */

readFile( __filename, onFile );
readFile( 'beepboop', onFile );

function onFile( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'File does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.log( data );
    }
}
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-file.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-file

[test-image]: https://github.com/stdlib-js/fs-read-file/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/fs-read-file/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-file/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-file?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-file.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-file/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists/tree/deno

[@stdlib/fs/open]: https://github.com/stdlib-js/fs-open/tree/deno

[@stdlib/fs/read-dir]: https://github.com/stdlib-js/fs-read-dir/tree/deno

[@stdlib/fs/read-json]: https://github.com/stdlib-js/fs-read-json/tree/deno

[@stdlib/fs/write-file]: https://github.com/stdlib-js/fs-write-file/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
