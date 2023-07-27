/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const keysPath = path.split('.');
  if (!keysPath.length) {
  	return;
  };
  return (obj) => {
    let result = obj;
    for (const key of keysPath) {
      if (!result[key]) return;
      result = result[key];
    }
    return result;
  };
};
