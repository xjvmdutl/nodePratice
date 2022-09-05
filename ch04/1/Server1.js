const http = require("http");
/*
http
  .createServer((req, res) => {
    //요청이 오면 어떻게 처리할지 적어둔다.
    res.write("<h1>HelloNode!</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello ZeroCho</p>");
  })
  .listen(8080, () => {
    //프로세스로 올려야한다
    console.log("8080번 포트에서 서버 대기 중입니다.");
  });
//초기 도메인이 없으므로 자기 자신으로 접속가능한 localhost로 접근하면 된다
 */
const server = http
  .createServer((req, res) => {
    //Http에 관련된 헤더 설정이다
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>HelloNode!</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello ZeroCho</p>");
  })
  .listen(8080);
//이벤트로 뽑아 분리할 수 있다
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on("error", error => {
  //항상 서버도 오류를 처리해야한다
  console.error(error);
});

const server2 = http //서버를 여러개 띄울수 있다
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>HelloNode!</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello ZeroCho</p>");
  })
  .listen(8081);
