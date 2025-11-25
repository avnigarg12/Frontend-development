'use strict';
// Q10 – Nested Hoisting and Closures
// Demonstrates hoisting and memory contexts. Predict output and then run.
//
// Output explanation in comments: outer logs 'undefined' because var count is hoisted (init to undefined) then set to 5.
// inner logs 'undefined' as well because inner's var count is hoisted inside inner scope, shadowing outer count.

function outer() {
  console.log('outer before declaration:', count);
  var count = 5;
  function inner() {
    console.log('inner before declaration:', count);
    var count = 10;
    console.log('inner after declaration:', count);
  }
  inner();
  console.log('outer after inner:', count);
}
outer();

// Arrow inner version
function outerArrow() {
  console.log('\nouterArrow before declaration:', count2);
  var count2 = 7;
  const innerArrow = () => {
    console.log('innerArrow before declaration (shadowed):', count2);
    // if we declared var count2 inside arrow that would shadow, but here we are just reading parent var.
  };
  innerArrow();
}
outerArrow();

console.log('\nComments: Each function creates its own lexical environment. Hoisting moves declarations to top of their function scope. Use debugger to step through call stack.');