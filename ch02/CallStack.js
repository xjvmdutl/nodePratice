//3개의 함수를 생성
function first(){
    second();
    console.log('첫 번쨰');
}
function second(){
    third();
    console.log('두 번째')
}
function third(){
    console.log('세 번째')
}

first()