import fetch from 'isomorphic-fetch';
import luchMethods from './luch-methods';

const luch = Object.assign(
  (url, options = {}) => fetch(url, options),
  luchMethods,
);

export default luch;
