const os = require("os"); //노드에서 모듈로 만들었다

console.log("운영체제 정보");
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());

//경로
console.log(os.homedir());
console.log(os.tmpdir());

//CPU 정보
console.log(os.cpus());
console.log(os.cpus().length);

//메모리 정보
console.log(os.freemem());
console.log(os.totalmem());
