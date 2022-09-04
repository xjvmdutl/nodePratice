//node 에서 어노니머스 this는 global이 아니다
console.log(this); //global이 아닐까 추측할 수 있지만 아니다.
console.log(this === module.exports);

function a() {
  console.log(this === global); //함수 안에서의 this는 global 이다.
}
a();
