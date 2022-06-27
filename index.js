const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
function receivesAFunction(chai){
  const spy = chai.spy
  receivesAFunction(spy);
  return spy
};
function returnsANamedFunction() {
  return function namedFn() {
    console.log("this is a named function");
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}