'use strict';
// Q4 – Debugging Mystery
// Original error: assigning to undeclared variable 'greeting' in strict mode throws ReferenceError.
// Fix: declare the variable with let/const/var in appropriate scope.

function showMessage() {
  // Under strict mode this would throw if we didn't declare greeting.
  let greeting = "Welcome"; // fixed by declaring variable
  console.log(greeting);
}
showMessage();

console.log('\nExplanation: In strict mode, creating global variables by omission is prohibited. Declaration keywords are required. Observe call stack and watch ' + 'greeting' + ' in debugger.');