const receivesAFunction = function (callback) {
    callback();
  };
  receivesAFunction();
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("The returned named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("The returned anonymous function");
    };
  }