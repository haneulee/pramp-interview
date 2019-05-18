function flattenDictionary(dict) {
  let result = {};
  let firstText = "";
  // your code goes here
  function serialize(keys, parentKey) {
    for (var key in keys) {
      firstText = parentKey + (parentKey && key ? "." : "") + key;
      if (parseInt(keys[key], 10) || typeof keys[key] === "string") {
        result[firstText] = keys[key];
      } else {
        serialize(keys[key], firstText);
      }
    }
  }

  serialize(dict, "");

  return result;
}
