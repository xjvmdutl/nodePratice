const fs = require("fs");

console.log("before: ", process.memoryUsage().rss); //메모리 체크

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big2.txt", data1);
console.log("buffer: ", process.memoryUsage().rss); //Buffer를 통채로 옮기기떄문에 1GB 차이가 나낟
