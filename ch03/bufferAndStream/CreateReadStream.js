const fs = require("fs");
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 }); //조각내서 조금씩 전달

const data = []; //조각을 합쳐주어야 한다
//스트림 같은 경우 대용량으로 데이터를 보내도 잘라서 전달해 주기 때문에 많은 양을 데이터를 서버에 가지고 있을 필요가 없기 떄문에 스트림이 좋다
readStream.on("data", chunk => {
  //한번에 다읽어서 Buffer랑 차이가 없다 -> default로 읽어들이는 크기가 64KB 이기 때문
  data.push(chunk);
  console.log("data: " + chunk, chunk.length);
});
readStream.on("end", () => {
  console.log("end: ", Buffer.concat(data).toString());
});
readStream.on("error", err => {
  //비동기 작업은 항상 예외 처리를 해야한다
  console.error("error: ", err);
});
