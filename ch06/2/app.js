const dotenv = require("dotenv");
dotenv.config(); //.env 파일을 읽어서 설정한다. //.env 파일 같은 경우 git에 올리면 안된다

const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs");

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev")); //요청과 응답을 기록하는 라우터, 운영에서는 combined 사용

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다."); //업로드 폴더가 없을 경우
  fs.mkdirSync("uploads"); //서버실행 전에 실행되는것이므로 sync 사용 가능
}
const upload = multer({
  storage: multer.diskStorage({
    //메모리에 저장
    destination(req, file, done) {
      done(null, "uploads/"); //에러처리하기 위해서는 첫번째 파라미터에 에러처리 미들웨어를 넣어준면 된다
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //확장자 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
});
//app.use(morgan("combined"));
app.use(cookieParser(process.env.COOKIE_SECRET)); //키가 소스코드에 유출되면 안된다
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET, //쿠키를 서명하는 키, 이 키는 다른 사람에게 노출되서는 안된다
    cookie: {
      httpOnly: true //자바스크립트 공격을 안당한다
    }
    //name: "connect.sid" //기본값은 connect.sid 이다
  })
);
//app.use("요청 경로", express.static("실제 경로")); //정적파일을 보내줄때 사용
// localhost:3000/zerocho.html .... ch06/public-3030/zerocho.html //서버에 public-3030 폴더가 있는지 예측이 안된다(보안에 좋다)
//미들웨어간 순서도 중요하기 떄문에 여기 위치에 주는것이 중요하다.
//아래 코드를 실행시켜 주지 않기 때문에 -> 내부적으로 next를 호출하는데, static은 내부적으로 next를 호출하지 않고 파일을 반환한다
//app.use("/", express.static(__dirname, "public"));
/*
app.use("/", (req, res, next) => {
  if (req.session.id) {
    express.static(__dirname, "public")(req, res, next); //미들웨어 확장법
  } else {
    next();
  }
});
 */
//app.use(express.json()); //client -> server
//app.use(express.urlencoded({ extended: true })); //true면 qs, false면 querystring\
/*
app.use((req, res, next) => {
  req.session.data = "zerocho 비번"; //세션에 담아서 전달할 수 있지만, 다음 요청에도 남아 있다.
  req.data = "zerocho 비번"; //이렇게 넘기면 남아있지 않는다
  next();
});
 */

app.get("/", (req, res, next) => {
  /*
  console.log(req.cookies);
  console.log(req.signedCookies); //암호화된 쿠키(서명된 쿠키)
  console.log(req.body);

  res.cookie("name", encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: "/"
  });
  res.clearCookie("name", encodeURIComponent(name), {
    httpOnly: true,
    path: "/"
  });
   */
  req.session.id = "hello";
  console.log(req.session); //사용자에 대한 고유한 세션이다

  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res, next) => {
  res.send("hello express!");
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});

app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    //1개의 파일만 업로드 할때
    console.log(req.file);
    res.send("ok");
  }
);
/*
app.post("/upload", upload.single("image"), (req, res) => {
  //1개의 파일만 업로드 할때
  console.log(req.file);
  res.send("ok");
});
 */
app.get("/category/:name", (req, res) => {
  res.send(`hello wildcard`);
});
app.get("/category/javascript", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  res.status(404).send("404지요");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(200).send("에러처리 미들웨어, 상태코드는 안알려준다");
});
app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
