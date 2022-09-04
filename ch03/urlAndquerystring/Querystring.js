const url = require("url");
const querystring = require("ch03/urlAndquerystring/Querystring");

const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript"
);
const query = querystring.parse(parsedUrl.query);
console.log("queryString.parse =", query);
console.log("queryString.stringify =", querystring.stringify(query));
