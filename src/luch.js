import fetch from 'isomorphic-fetch';
import FormData from 'form-data';
import {stringify as stringifyToQuery} from 'qsp';


// appendToFormData :: (Object, FormData) -> FormData
// export const appendToFormData = (obj, fd = new FormData(), res = Object.keys(obj).map(key => fd.append(key, obj[key]))) => res;
export const appendToFormData = (obj, fd = new FormData()) => {
  Object.keys(obj).map(key => fd.append(key, obj[key]))
  return fd;
};

// getAbsoluteUrl :: String -> String -> String
export const getAbsoluteUrl = baseUrl => (path = '') => `${baseUrl}${path}`;

// removeUndefinedAttrs :: Object -> Object
export const removeUndefinedAttrs = obj => JSON.parse(JSON.stringify(obj));

export const getJson = resp => resp.json();


const createFdReqOptions = (method, data) => ({
  method,
  body: appendToFormData(data)
});

const createQueryReqOptions = method => ({method});


const createFdRequest = method => (url, data={}, options={}) => fetch(url, Object.assign({}, createFdReqOptions(method, data), options));

const createQueryRequest = method => (url, params, options = {}) =>
  fetch(`${url}${params ? `?${stringifyToQuery(params)}` : ''}`, Object.assign({}, createQueryReqOptions(method), options));


const methods = {
  get: createQueryRequest('GET'),
  head: createQueryRequest('HEAD'),
  oprions: createQueryRequest('OPTIONS'),
  delete: createQueryRequest('DELETE'),
  post: createFdRequest('POST'),
  put: createFdRequest('PUT'),
  patch: createFdRequest('PATCH')
};


export const luch = Object.assign((url, options = {}) => fetch(url, options), methods);

export default luch;


export const luchFor = (baseUrl, baseOptions) => Object.assign(

  (path, options = {}) => luch(getAbsoluteUrl(baseUrl)(path)),

  Object.keys(methods).reduce(
    (obj, key) => Object.assign(
      {
        [key]: (path, data, options = {}) => methods[key](getAbsoluteUrl(baseUrl)(path), data, Object.assign({}, baseOptions, options))
      },
      obj,
    ),
    {}
  ),

  {
    baseUrl,
    baseOptions,
    addToBaseConfig: (path, options = {}) => luchFor(
      `${baseUrl}${path}`,
      Object.assign({}, baseOptions, options)
    ),
  }
);
