function outerFunction() {
  const a = 10;
  // this function is a closure; it can access variable 'a' even after the outer function has finished being executed
  return function () {
    console.log(a);
  };
}

const innerFunction = outerFunction();
innerFunction();
