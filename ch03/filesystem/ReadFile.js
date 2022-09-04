const fs = require("fs").promises; //Promise를 지원하도록 변경 가능

/*
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); //16진법으로 출력되므로 toString으로 출력하자
  console.log(data.toString());
});
 */
fs.readFile("./readme.txt")
  .then(data => {
    console.log(data); //16진법으로 출력되므로 toString으로 출력하자
    console.log(data.toString());
  })
  .catch(err => {
    throw err;
  });
