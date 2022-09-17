const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000); //앱 설정을 할 수 있다
//위에서 아래로 실행하기 때문에 순서가 중요하다
/*
app.use((req, res, next) => {
  console.log("모든 요청에 실행하고 싶다"); //모든 요청에 공통적안 처리를 해야할떄 어떻게 할까?
  //미들웨어는 반드시 next를 호출해야 다음 요청을 처리한다
  next();
});
*/

app.use("/about", (req, res, next) => {
  //미들웨어에 주소를 직접 적용할 수 있다
  console.log("모든 about 요청 실행하고 싶다");
  next();
});
/*
app.use(
  (req, res, next) => {
  //요청 체인도 가능
    console.log("1 요청 실행하고 싶다");
    next();
  },
  (req, res, next) => {
    console.log("2 요청 실행하고 싶다");
    next();
  },
  (req, res, next) => {
    console.log("3 요청 실행하고 싶다");
    next();
  }
);
 */
app.use(
  (req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요");
    next();
  },
  (req, res, next) => {
    //throw new Error("에러가 발생"); //오류가 발생했을 경우
    //어느 위치에 오류가 발생했는지도 알려준다
    //너무 상세한 오류를 제공하기 떄문에 에러처리를 따로 하는것이 좋다
    try {
      //console.log("에러어~");
      //console.log(asdfafdsafds);
      next();
    } catch (error) {
      next(error); //next에 인수가 들어 있다면, 에러처리 미들웨어로 넘겨 준다
    }
  }
);
app.get(
  "/",
  (req, res, next) => {
    //라우터
    //res.send("hello express");
    res.sendFile(path.join(__dirname, "index.html"));
    //하나의 라우터에서 여러번 send 하게 되면, 오류가 발생한다
    //res.send("안녕하세요");
    //res.json({ hello: "junhokim" });
    //http의 기능을 상속받아 req,res가 구현되어 있어, 기능을 쓸수 있지만 사용하지 않는것을 권장한다
    //res.json({ hello: "junhokim" });
    //console.log("hello node"); //res.json을 실행한다고, 함수가 종료되는것이 아니므로, 해당 코드가 실행된다
    next("route");
  },
  (req, res) => {
    console.log("실행 되는가?");
  }
);

app.get("/", (req, res) => {
  console.log("실행 되지롱");
});
app.get("/category/:name", (req, res) => {
  //와일드카드 문법
  //와일드카드는 항상 다른 요청보다 밑에 있어야한다
  res.send(`hello wildcard`);
});
app.get("/category/javascript", (req, res) => {
  res.send(`hello ${req.params.name}`);
});
app.get("/about", (req, res) => {
  res.send("hello express");
});
/*
app.get("*", (req, res) => {
  //이 요청이 맨 위에 있다면 다른 요청을 처리할 수가 없다
  res.send("hello everybody");
});
 */
app.use((req, res, next) => {
  res.status(404).send("404지요");
});
app.use((err, req, res, next) => {
  //에러 미들웨어는 반드시 4개를 모두 써야한다.
  console.error(err);
  res.status(500).send("에러처리 미들웨어."); //status 코드를 속여서 전달할 수도 있다
});
app.listen(app.get("port"), () => {
  //앱을 전역변수를 가지고 올 수 있다
  console.log("익스프레스 서버 실행");
});
