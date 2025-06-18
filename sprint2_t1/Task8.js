let x = 7, y = 12;

console.log("\t\tSWAPPING");

let temp = x;
x = y;
y = temp;
console.log("\nUsed temp to swap:", x, y);


x = x + y;
y = x - y;
x = x - y;
console.log("swapped without temp:", x, y);