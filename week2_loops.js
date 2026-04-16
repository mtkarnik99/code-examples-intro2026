// ============================================
// LOOPS
// ============================================

// for loop — counts UP from 0 to 4 (5 times total)
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// for loop — counts DOWN from 5 to 1
for (let i = 5; i > 0; i--) {
    console.log("Hello");
}

// while loop — keeps running as long as a is greater than 0
let a = 5;
while (a > 0) {
    console.log("Hello");
    a--;
}


// ============================================
// DO...WHILE LOOP
// ============================================

// A do...while loop ALWAYS runs at least once before checking the condition
// Even if the condition is false from the start, the code inside runs one time

// Example 1 — condition is false immediately
// "Hello" prints ONCE, then the condition is checked and the loop stops
do {
    console.log("Hello");
} while (false);

// Example 2 — condition is always true
// ⚠️ BROKEN EXAMPLE: This will run forever and freeze your browser!
// This is called an infinite loop — the condition never becomes false
// Do NOT run this in your browser
do {
    console.log("Hello");
} while (true);

// Example 3 — a working do...while with a counter
// Runs 5 times, counts down from 5 to 1
let g = 5;
do {
    console.log("Hello");
    g--;
} while (g > 0);


// ============================================
// ARRAYS
// ============================================

// Creating an array of numbers
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// .map() creates a NEW array by transforming each item
// The original array (arr1) stays unchanged
let doubled = arr1.map(num => num * 2);
console.log(doubled);

// .length tells you how many items are in the array
console.log(arr1.length);

// .push() adds one item to the END of the array
arr1.push(9);
console.log(arr1);

// .pop() removes the LAST item from the array
arr1.pop();
console.log(arr1);

// .push() can also add multiple items at once
arr1.push(6, 7, 8);
console.log(arr1);

// Arrays can hold mixed types — numbers AND strings together
arr1.push(9, 10, "Javascript");
console.log(arr1);


// ============================================
// LOOPS + ARRAYS
// ============================================

// Building an array using a loop — adds numbers 1 through 5
let arr2 = [];
for (let i = 1; i < 6; i++) {
    arr2.push(i);
}
console.log(arr2);

// Looping through an array — prints each item one by one
// arr2.length keeps the loop flexible — no hardcoding needed
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}