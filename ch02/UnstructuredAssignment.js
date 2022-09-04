const example = { a: 123, b: { c: 135, d: 146 } };
const a = example.a;
const d = example.b.d;

const {
  a,
  b: { d }
} = example;
console.log(a); //123
console.log(d); //146, 객체는 키가 같아야 된다.

const arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const z = arr[4];

const [x, y, , , z] = arr; //배열은 자리가 같아야된다
