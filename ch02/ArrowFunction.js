function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y; //중괄호 뒤 바로 리턴시 생략 가능
const add4 = (x, y) => x + y; //리턴값을 한번 묶어준다.

function not1(x) {
  return !x;
}

const not2 = x => !x; //매개변수 하나면 생략 가능

const obj = (x, y) => {
  return { x, y }; //객체 반환 리터럴
};
const obj = (x, y) => ({ x, y }); // 객체를 리턴하는 경우에는 소괋호가 필수이다

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function() {
    var that = this; //자식에서 부모를 접근할떄 사용하기 위한 변수
    this.friends.forEach(function(friend) {
      that.name, friend; //that = foreach의 this이다. //부모의 this를 사용하기 위해서는 이렇게 사용햇다
    });
  }
};

const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    this.friends.forEach(friend => {
      //화살표 함수의 this는 부모의 this를 가리킨다.
      console.log(this.name, friend);
    });
  }
};
relationship2.logFriends();
