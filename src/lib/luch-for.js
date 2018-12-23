import luch from './luch';
import luchMethods from './luch-methods';
import {getAbsoluteUrl} from './utils';

const luchFor = (baseUrl, baseOptions) => Object.assign(

  (path, options = {}) => luch(getAbsoluteUrl(baseUrl)(path), options),

  Object.keys(luchMethods).reduce(
    (obj, key) => Object.assign(
      {
        [key]: (path, data, options = {}) => luchMethods[key](
          getAbsoluteUrl(baseUrl)(path),
          data,
          Object.assign({}, baseOptions, options),
        ),
      },
      obj,
    ),
    {},
  ),

  {
    baseUrl,
    baseOptions,
    addToBaseConfig: (path, options = {}) => luchFor(
      `${baseUrl}${path}`,
      Object.assign({}, baseOptions, options),
    ),
  },
);


export default luchFor;
