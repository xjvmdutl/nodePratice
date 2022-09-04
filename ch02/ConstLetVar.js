if (true) {
  var x = 3;
}
console.log(x); // var 같은 경우 블록스코프를 무시해서 접근 가능하다
//function 으로 감싸져 있는 function 스코프 밖에서는 사용할 수 없다

if (true) {
  const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined
//블록 스코프 밖에서 const 접근시 오류가 난다

const a = 3; //const에는 대입 연산자를 한번만 쓸 수 있다
//a = '5'; //에러

const b = { name: "zerocho" };
b.name = "nerocho"; //가능

//const c; //에러
//let c; let을 사용하면 값을 변경할 수 있다.
let c = 5;
c = 3;
c = 10;
