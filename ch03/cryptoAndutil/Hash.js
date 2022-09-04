const crypto = require('crypto');

//헤시는 복호화가 힘들기 때문에 해커들이 복호화하지 않는다
console.log(('base64 = ', crypto.createHash('sha512').update('비밀번호').digest('base64')));
console.log(('hex = ', crypto.createHash('sha512').update('비밀번호').digest('hex')));
console.log(('base64 = ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64')));
