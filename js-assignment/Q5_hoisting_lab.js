'use strict';
// Q5 – Hoisting Lab: The Sequence Trap
// Predict: variable and function hoisting behavior explained in comments, then fixed code and arrow-function variant.

// Original code would show 'undefined' for 'score' (var hoisted but uninitialized), and functions hoist fully.
// 'let status' is in TDZ and calling startGame before declaration will throw ReferenceError under strict mode.
//
// Fixed version:

var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function rewrite (note: arrow functions are not hoisted in the same way if assigned to const/let)
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => { console.log(status); };

console.log('\nArrow function run:');
console.log(score);
announceArrow();
startGameArrow();

console.log('\nComments: var declarations are hoisted with initialization to undefined. Function declarations are hoisted fully. let/const are hoisted but uninitialized (TDZ). Arrow functions assigned to const are not hoisted.');