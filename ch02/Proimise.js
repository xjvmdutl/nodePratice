function callback() {}
//callback 이라는게 항상 들어가야 한다.
//callback 함수는 이렇게 빼내는 것이 최선이다.
setTimeout(callback, 3000);

const promise = setTimeoutPromise(3000);

console.log("딴짓");
console.log("딴짓");
console.log("딴짓");
console.log("딴짓");
console.log("딴짓");
//...

promise.then(() => {
  //변수로 뽑아 사용할 수 있다
  console.log("지금 할래");
});
