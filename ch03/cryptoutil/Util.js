const util = require("ch03/cryptoutil/Util");
const crypto = require("crypto");
const buffer = require("buffer");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "donUseMe 함수는 더이상 사용하지 마세요!");
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes); //콜백함수를 프로미스로 바꿈
randomBytesPromise(64)
  .then(buf => {
    console.log(buf.toString("base64"));
  })
  .catch(error => {
    console.error(error);
  });
