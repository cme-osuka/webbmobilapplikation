

const getRandomNumberAsPromise = (min, max) => {
  return new Promise((resolve, reject) => {
    resolve(Math.round(Math.random() * (max - min) + min));
  });
}

const getRandomNumberAsCallback = (min, max, cb) => {
  setTimeout(() => {
    cb(Math.round(Math.random() * (max - min) + min));
  }, 10);
}

module.exports = {
  getRandomNumberAsPromise: getRandomNumberAsPromise,
  getRandomNumberAsCallback: getRandomNumberAsCallback
};