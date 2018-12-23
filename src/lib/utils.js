import FormData from 'form-data';

// getAbsoluteUrl :: String -> String -> String
export const getAbsoluteUrl = baseUrl => (path = '') => `${baseUrl}${path}`;

// removeUndefinedAttrs :: Object -> Object
export const removeUndefinedAttrs = obj => JSON.parse(JSON.stringify(obj));

export const getJson = resp => resp.json();


// appendToFormData :: (Object, FormData) -> FormData
export const appendToFormData = (obj, fd = new FormData()) => {
  Object.keys(obj).map(key => fd.append(key, obj[key]));
  return fd;
};
