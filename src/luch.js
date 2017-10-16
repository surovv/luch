import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import {stringify as stringifyToQuery} from 'qsp';


// export const appendToFormData = (obj, fd = new FormData(), res = Object.keys(obj).map(key => fd.append(key, obj[key]))) => res;
export const appendToFormData = (obj, fd = new FormData()) => {
  Object.keys(obj).map(key => fd.append(key, obj[key]))
  return fd;
};

const createFdReqOptions = (method, data) => ({
  method: method,
  body: appendToFormData(data)
});
const createQueryReqOptions = method => ({method});

const createFdRequest = method => (url, data={}, options={}) => fetch(url, Object.assign({}, createFdReqOptions(method, data), options));
const createQueryRequest = method => (url, params, options = {}) =>
  fetch(`${url}${params ? `?${stringifyToQuery(params)}` : ''}`, Object.assign({}, createQueryReqOptions(method), options));

const methods = {
  get: createQueryRequest('GET'),
  head: createQueryRequest('HEAD'),
  delete: createQueryRequest('DELETE'),
  post: createFdRequest('POST'),
  put: createFdRequest('PUT'),
  patch: createFdRequest('PATCH')
};

export const luch = Object.assign((url, options = {}) => fetch(url, options), methods);

export default luch;


export const getAbsoluteUrl = baseUrl => path => `${baseUrl}${path}`;

export const withoutUndefinedParams = data => JSON.parse(JSON.stringify(data));

export const getJson = resp => resp.json();
