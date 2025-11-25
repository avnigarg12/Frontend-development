// Q8 – Strict Mode Showdown
// Demonstrates differences with and without 'use strict'.
// Save this file and run with and without the top 'use strict' line to observe behavior.

// Uncomment the next line to enable strict mode for testing:
// 'use strict';

function demo(a, a_second) {
  // Duplicate parameter names are illegal in strict mode.
  // Also, assignment to undeclared globals is illegal in strict mode.
  let total = 10;
  // delete total; // deleting local variables is not allowed; delete returns false for non-configurable properties.
  console.log('Parameters:', a, a_second, 'Total:', total);
}

demo(5, 10);

console.log('\nExplanation: Without strict mode some mistakes (duplicate params, implicit globals) are tolerated. With strict mode they throw. Correct ES6 version avoids duplicate params and uses declared variables.');