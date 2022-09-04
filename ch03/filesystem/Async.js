const fs = require("fs");

//readFile은 비동기 함수이기 떄문에 백그라운드로 넘어가서, 동작하기 때문에 어떤것이 먼저 실행될 지 알수가 없다
//순서 보장이 되지 않는다.
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("4번", data.toString());
});
