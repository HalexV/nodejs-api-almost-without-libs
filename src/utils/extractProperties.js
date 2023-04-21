export default function extractProperties(properties, target) {
  const myObj = {};

  if (typeof target !== "object") return null;

  properties.forEach((property) => {
    if (Reflect.has(target, property)) {
      if (target[property]) {
        myObj[property] = target[property];
      }
    }
  });

  if (Object.keys(myObj).length === 0) return null;

  return myObj;
}
