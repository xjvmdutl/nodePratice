const buffer = Buffer.from("저를 버퍼로 바꿔보세요");
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기")
];
console.log(Buffer.concat(array).toString()); //여러개의 버퍼를 전달받아 하나로 합칠수 있다

console.log(Buffer.alloc(5)); //아무것도 없는 버퍼를 만들 수도 있다
