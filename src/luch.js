import fetch from 'isomorphic-fetch';
import FormData from 'form-data';


export const convertToQuery = obj => `${Object.keys(obj).map(k => `${k}=${obj[k]}`).join('&')}`

// export const appendToFormData = (obj, fd = new FormData(), res = Object.keys(obj).map(key => fd.append(key, obj[key]))) => res;
export const appendToFormData = (obj, fd = new FormData()) => {
  Object.keys(obj).map(key => fd.append(key, obj[key]))
  return fd;
};

const genFdReqOptions = (method, data) => ({
  method: method,
  body: appendToFormData(data)
});
const genQueryReqOptions = method => ({method});

const genFdRequest = method => (url, data={}, options={}) => fetch(url, Object.assign({}, genFdReqOptions(method, data), options));
const genQueryRequest = method => (url, params, options = {}) =>
  fetch(`${url}${params ? `?${convertToQuery(params)}` : ''}`, Object.assign({}, genQueryReqOptions(method), options));

const methods = {
  get: genQueryRequest('GET'),
  head: genQueryRequest('HEAD'),
  delete: genQueryRequest('DELETE'),
  post: genFdRequest('POST'),
  put: genFdRequest('PUT'),
  patch: genFdRequest('PATCH')
}


export const getJson = resp => resp.json();


export const luch = Object.assign((url, options = {}) => fetch(url, options), methods);

export default luch;
