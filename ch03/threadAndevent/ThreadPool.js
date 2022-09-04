const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

//코어가 4개씩 동작하는 것을 볼수 있다 -> 내 코어에 맞게 동작시키기 위해서는 UV-THREADPOOL_SIZE=8로 설정하면 된다
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("2", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("3", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("4", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("5", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("6", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("7", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("8", Date.now() - start);
});
