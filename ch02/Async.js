const promise = new Promise();

promise.then(
  (
    result //...
  ) => null
);

async function main() {
  //await를 쓰기 위한 async 키워드를 사용햇다
  const result = await promise; //예전에는 이렇게 사용
}
//TopLevel Await
const result = await promise; //최근에는 이렇게 사용

async function main() {
  //만약 async 에서 리턴한게 있다면
  const result = await promise;
  return "zerocho";
}
main().then(name => null); //then으로 받아야된다.
const name = await main(); //이렇게도 가능

async function main() {
  //reject 처리 할 방법이 없기때문에 여기서 try-catch 를 써야한다
  try {
    const result = await promise;
    return "zerocho";
  } catch (error) {
    console.error(error);
  }
}
