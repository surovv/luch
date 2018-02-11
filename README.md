Light and flexible promise-based http client built on top of isomorphic-fetch with usefull extra functionality

# luch
[![Code Climate](https://codeclimate.com/github/surovv/luch/badges/gpa.svg)](https://codeclimate.com/github/surovv/luch) [![bitHound Overall Score](https://www.bithound.io/github/surovv/luch/badges/score.svg)](https://www.bithound.io/github/surovv/luch)

The `luch`  is light and flexible http client built on top of [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch "isomorphic-fetch"), which build on [GitHub's WHATWG Fetch polyfill](https://github.com/github/fetch).

The `luch` could be used for both environments as for browser and for node.js, it provides possibility to make requests in easy laconic way with flexible configuration. Also `luch` uses isomorphic and standardized base under the hood because it built on top of isomorphic-fetch.

## Warnings
According to origin [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch "isomorphic-fetch") docs
>- You must bring your own ES6 Promise compatible polyfill, I suggest [es6-promise](https://github.com/jakearchibald/es6-promise).

>For [ease-of-maintenance and backward-compatibility reasons][why polyfill], this library will always be a polyfill. As a "safe" alternative, which does not modify the global, consider [fetch-ponyfill][].


[why polyfill]: https://github.com/matthew-andrews/isomorphic-fetch/issues/31#issuecomment-149668361
[fetch-ponyfill]: https://github.com/qubyte/fetch-ponyfill

## Installation

####  NPM

```sh
npm install --save luch es6-promise
```

## luch API

##### luch(url [, options])
```js
require('es6-promise').polyfill();
const luch = require('luch').default;
// or es6
import luch from 'luch';

const someHeaders = new Headers();

const someOptions = {
  method: 'GET',
  headers: someHeaders,
  mode: 'cors',
  cache: 'default',
};

luch('api.web.com', someOptions)
  .then(response => response.json())
  .then(data => succFn(data))
  .catch(err => errFn(err))
```

### Request method aliases

For convenience aliases have been provided for all popular request methods.

##### luch.get(url [, params, config])
##### luch.head(url [, params, config])
##### luch.options(url [, params, config])
##### luch.delete(url [, params, config])
##### luch.post(url [, data, config]])
##### luch.put(url [, data, config]])
##### luch.patch(url [, data, config]])

###### NOTE
By default **get head options delete** methods stringify *params* to query-string and **post put patch** uses `form-data` for packing *data* argument.

```js
luch.get('http://cool.api.com/resource', {limit: 5, offset: 0})
  .then(response => handleResponse(response))
  .catch(err => handleErr(err));

luch.post('http://cool.api.com/things', {name: 'luch', howCoolItIs: 'very cool'});


const optns = {
  headers: new Headers(),
  cache: 'default',
};

const vals = {
  name: 'dog',
  howCoolItIs: 'WUF WUF',
};

luch.put('http://cool.api.com/things', vals, optns);
```

## luchFor

**luchFor** is method for defining customized luch-like clients with common configuration for multi requests.
##### luchFor(baseUrl [, baseOptions])

```js
// base.js
import {luchFor} from 'luch';

const localhostUrl = 'http://localhost:3000';

const localhostOptions = {
  headers: new Headers({
    "Content-Type": "application/json",
  }),
};

export const localhostLuch = luchFor(localhostUrl, localhostOptions);

// Voila! Now you can use it like original luch, but with predefined configuration

localhostLuch('/');
// => same as luch(`${localhostUrl}/`, localhostOptions);

const coolArticle = {
  title: 'LUCH FOR?? FOR WHAT??!!?',
  desc: 'WUF WUF',
};

localhostLuch.post('/articles', coolArticle);
// same as luch.post(`${localhostUrl}/articles`, coolArticle, localhostOptions);
```
###### Thats not all!
You can call **addToBaseConfig** method on luchFor objects, it especially usefull with modules using.
##### addToBaseConfig(path [, options])
```js
// users.js
import {localhostLuch} from './base';

const usersPath = '/users';

const usersConfig = {
  cache: 'default',
};

const usersLuch = localhostLuch.addToBaseConfig(usersPath, usersConfig);

usersLuch.post('/', {name: 'Dude'});

export const updateUser = (id, data) => userLuch.put(`/${id}`, data);
```
###### Note
You can pass *options* argument like in regular luch request, but it will be united with *baseOptions* by flat merging, so some *baseOptions* attributes values could be overriden by values from *options*.

You can read **baseUrl** and **baseOptions** values from luchFor object
```js
console.log(localhostLuch.baseUrl, localhostLuch.baseOptions);
```
## Utils
The `luch` lib provides some extra methods

##### getAbsoluteUrl(baseUrl)(path)
```js
import luch, {getAbsoluteUrl} from 'luch';

const apiUrl = 'http://localhost:3000';
const withApiUrl = getAbsoluteUrl(apiUrl);


const user = {...};
luch.post(withApiUrl('/users'), user);
// => same as luch.post('http://localhost:3000/users', user)

luch.get(withApiUrl('/resource'));
// => same as luch.get('http://localhost:3000/resource')

luch.get(withApiUrl('/resource2'));
luch.get(withApiUrl('/resource3'));
```

##### removeUndefinedAttrs(obj)
```js
import {removeUndefinedAttrs} from 'luch';

const obj = {
  a: undefined,
  b: null,
  c: false,
  d: 0,
  e: '',
  f: 42,
};

removeUndefinedAttrs(obj);
/* => {
  b: null,
  c: false,
  d: 0,
  e: '',
  f: 42,
}; */

console.log(obj);
// => {a: undefined, b: null, ...}
```

##### getJson
Use it when you need call **json** method on response

```js
import luch, {getJson} from 'luch';

// from
luch(someUrl)
  .then(response => response.json())
  .then(data => handleData(data);

// to
luch(someUrl).then(getJson).then(handleData);
```
