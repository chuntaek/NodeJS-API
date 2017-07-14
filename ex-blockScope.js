function foo() {
  if(false) {
    let a = 1;
  }
  console.log(a);
}

foo(); // ReferenceError: a is not defined
