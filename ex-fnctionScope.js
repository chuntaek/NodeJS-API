// 함수 스코프
function foo() {
  if(false) {
    var a = 1;
  }
  console.log(a);
}

foo(); // undefined
