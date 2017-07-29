import fetch from 'isomorphic-fetch';
import FormData from 'form-data';


export const convertToQuery = obj => `${Object.keys(obj).map(k => `${k}=${obj[k]}`).join('&')}`

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
  fetch(`${url}${params ? `?${convertToQuery(params)}` : ''}`, Object.assign({}, createQueryReqOptions(method), options));

const methods = {
  get: createQueryRequest('GET'),
  head: createQueryRequest('HEAD'),
  delete: createQueryRequest('DELETE'),
  post: createFdRequest('POST'),
  put: createFdRequest('PUT'),
  patch: createFdRequest('PATCH')
}


export const getJson = resp => resp.json();


export const luch = Object.assign((url, options = {}) => fetch(url, options), methods);

export default luch;
