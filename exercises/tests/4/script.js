const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Argument must be a string!");
  }

  if (str.length === 0) {
    return "";
  }

  const characters = [];

  for (let i = str.length - 1; i > -1; i--) {
    characters.push(str.charAt(i));
  }

  return characters.join("");
}

const isBetween = (a, b, x) => {
  if (!Number.isInteger(a)) {
    throw new Error("'a' must be an integer!");
  }

  if (!Number.isInteger(b)) {
    throw new Error("'b' must be an integer!");
  }

  if (!Number.isInteger(x)) {
    throw new Error("'x' must be an integer!");
  }

  if (a >= b) {
    throw new Error("'a' must be less than 'b'!");
  }

  if (x <= a) {
    return false;
  }

  if (x >= b) {
    return false;
  }

  return true;
}

const chunk = (ar, itemsPerChunk) => {
  if (!Array.isArray(ar)) {
    throw new Error("'ar' must be an array!");
  }

  if (!Number.isInteger(itemsPerChunk)) {
    throw new Error("'itemsPerChunk' must be an integer!");
  }

  if (itemsPerChunk <= 0) {
    throw new Error("'itemsPerChunk' must be positive!");
  }

  const rv = [];
  let currentChunk = [];
  for (let i = 0; i < ar.length; i++) {
    currentChunk.push(ar[i]);

    if (currentChunk.length === itemsPerChunk) {
      rv.push(currentChunk);
      currentChunk = [];
    }
  }

  if (currentChunk.length > 0) {
    rv.push(currentChunk);
  }

  return rv;
}

module.exports = {
  reverseString: reverseString,
  isBetween: isBetween,
  chunk: chunk,
};