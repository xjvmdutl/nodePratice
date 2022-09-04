const odd = "홀수입니다";
const even = "짝수입니다";

exports.odd = odd;
exports.even = even;
//module.exports === exports === {}//초기 빈 객체로 되어있다
/*
//다른 파일에서 쓸 수 있다.
module.exports = { //파일에서 한번만 넘겨줄 수 있다.
    odd, //키와 값변수가 같아서 생략 odd : odd
    even
};
 */

/*
export default {
    odd,
    even
}
*/
