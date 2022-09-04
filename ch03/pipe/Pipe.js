const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 });
const zlibStream = zlib.createGzip(); //압축 스트림
const writeStream = fs.createWriteStream("./writeme.txt");

//readme 파일을 16 byte씩 읽어 writeme에 써줄수 있다
readStream.pipe(zlibStream).pipe(writeStream);
