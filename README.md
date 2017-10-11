Promise-based http client to make isomorphic-fetch requests in more easier way

# luch
[![Code Climate](https://codeclimate.com/github/surovv/luch/badges/gpa.svg)](https://codeclimate.com/github/surovv/luch) [![bitHound Overall Score](https://www.bithound.io/github/surovv/luch/badges/score.svg)](https://www.bithound.io/github/surovv/luch)

The `luch`  is wrapper for [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch "isomorphic-fetch"), it provides some extra methods to make requests in more easier way and saves all default configuration flexibility.

The `luch` is Promise-based HTTP client for browser and node.js, it built on top of isomorphic-fetch which build on [GitHub's WHATWG Fetch polyfill](https://github.com/github/fetch).

## Warnings
According to origin [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch "isomorphic-fetch") docs
>- You must bring your own ES6 Promise compatible polyfill, I suggest [es6-promise](https://github.com/jakearchibald/es6-promise).

>For [ease-of-maintenance and backward-compatibility reasons][why polyfill], this library will always be a polyfill. As a "safe" alternative, which does not modify the global, consider [fetch-ponyfill][].


[why polyfill]: https://github.com/matthew-andrews/isomorphic-fetch/issues/31#issuecomment-149668361
[fetch-ponyfill]: https://github.com/qubyte/fetch-ponyfill

## Installation

###  NPM

```sh
npm install --save luch es6-promise
```

## Usage

```js
require('es6-promise').polyfill();
require('luch');

luch('api.web.com').then(response => response.json()).then(data => fn(data)).catch(err => errFn(err))

luch.get('api.web.com', {param: 42, foo: 'bar', some: {nested: ['val', 'ues']}});

luch.post('api.web.com/auth', {email: 'mail@mail.mail', password: 'mailmail!mail!!!!'});
```
