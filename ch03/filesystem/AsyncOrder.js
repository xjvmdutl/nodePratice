const fs = require("fs");

//비동기 작업을 하면서 순서를 유지하는 것이 가장 좋다
//동기랑 차이가 무엇인가? 해당 파일을 여러개 실행할 경우 모두 비동기로 실행되기 떄문에 의미가 있다.
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      fs.readFile("./readme.txt", (err, data) => {
        if (err) {
          throw err;
        }
        console.log("4번", data.toString());
      });
    });
  });
});
