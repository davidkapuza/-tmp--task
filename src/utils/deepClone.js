/**
 * @param {any[]} value
 */
 export default function deepClone(value) {
  let val;
  if (value && Array.isArray(value)) {
    val = [...value];
  } else if (value && typeof value === 'object') {
    val = { ...value }; 
  } else {
    return value;
  }

  Object.keys(val).forEach((key) => {
    if (val[key]) {
      if (Array.isArray(val[key]) || (typeof val[key] === 'object')) {
        val[key] = deepClone(val[key]);
      }
    }
  });
  return val; 
};