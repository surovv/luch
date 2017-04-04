import fetch from 'isomorphic-fetch';
import FormData from 'form-data';


export const convertToQuery = obj => `${Object.keys(obj).map(k => `${k}=${obj[k]}`).join('&')}`

// export const appendToFormData = (obj, fd = new FormData(), res = Object.keys(obj).map(key => fd.append(key, obj[key]))) => res;
export const appendToFormData = (obj, fd = new FormData()) => {
  Object.keys(obj).map(key => fd.append(key, obj[key]))
  return fd;
};

const genFdReqConfig = (method, data) => ({
  method: method,
  body: appendToFormData(data)
});
const genQueryReqConfig = method => ({method});

const genFdRequest = method => (url, data={}, config={}) => fetch(url, Object.assign({}, genFdReqConfig(method, data), config));
const genQueryRequest = method => (url, params, config = {}) =>
  fetch(`${url}${params ? `?${convertToQuery(params)}` : ''}`, Object.assign({}, genQueryReqConfig(method), config));

const methods = {
  get: genQueryRequest('GET'),
  head: genQueryRequest('HEAD'),
  post: genFdRequest('POST')
}


export const getJson = resp => resp.json();


export const luch = Object.assign((url, config = {}) => fetch(url, config), methods);

export default luch;
