const path = require("path");

console.log(path); //리눅스랑 윈도우에서의 경로처리 표시 방법이 다르기 때문에 해당 모듈을 사용해 알아서 처리해주도록 하자
console.log(path.join(__dirname, "..", "/Var.js"));
console.log(path.resolve(__dirname, "/Var.js")); //resolve는 절대 경로

const string = __filename;

console.log("path.seq = " + path.sep);
console.log("path.delimiter = " + path.delimiter);

console.log("path.dirname = " + path.dirname(string));
console.log("path.extname = " + path.extname(string));
console.log("path.basename = " + path.basename(string));
console.log(
  "path.basename + extname = " + path.basename(string, path.extname(string))
);

console.log("path.parse = " + path.parse(string));
console.log(
  "path.format = " +
    path.format({
      dir: "/Users/junhokim",
      name: "path",
      ext: ".js"
    })
);
console.log("path.normalize = " + path.normalize("/Users/junhokim/"));

console.log("path.isAbsolute = " + path.isAbsolute("/Users"));
console.log("path.isAbsolute = " + path.isAbsolute("./home"));

console.log(
  "path.relative = " + path.relative("/Users/junhokim/Path.js", "/Users")
);
console.log("path.join = " + path.join(__dirname, "..", "/Users"));
console.log("path.resolve = " + path.resolve(__dirname, "..", "Users"));
