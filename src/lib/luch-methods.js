import fetch from 'isomorphic-fetch';
import {stringify as stringifyToQuery} from 'qsp';

// const createFormDataOptions = (method, data) => ({
//   method,
//   body: appendToFormData(data),
// });
//
// const createFormDataRequest = method => (url, data = {}, options = {}) =>
//   fetch(
//     url,
//     {
//       ...createFormDataOptions(method, data),
//       ...options,
//     },
//   );


// createJsonBodyOptions :: (String, a) -> Object
const createJsonBodyOptions = (method, data) => ({
  method,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data),
});

const createJsonBodyRequest = method => (url, data = {}, options = {}) => (
  fetch(
    url,
    {
      ...createJsonBodyOptions(method, data),
      ...options,
    },
  )
);

// createQueryOptions :: String -> Object
const createQueryOptions = method => ({method});

const createQueryRequest = method => (url, params, options = {}) => (
  fetch(
    `${url}${params ? `?${stringifyToQuery(params)}` : ''}`,
    {
      ...createQueryOptions(method),
      ...options,
    },
  )
);

const methods = {
  get: createQueryRequest('GET'),
  head: createQueryRequest('HEAD'),
  oprions: createQueryRequest('OPTIONS'),
  delete: createQueryRequest('DELETE'),
  post: createJsonBodyRequest('POST'),
  put: createJsonBodyRequest('PUT'),
  patch: createJsonBodyRequest('PATCH'),
};


export default methods;
