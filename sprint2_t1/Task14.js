var age = 19;
var msg;

console.log("\t\tHow Old are You?");

if (age < 16) {
    msg = "\nYou can't drive";
} else if (age <= 17) {
    msg = "\nYou can drive but not vote";
} else if (age <= 24) {
    msg = "\nYou can vote but not rent a car";
} else {
    msg = "\nYou can do pretty much anything";
}

console.log("Conclusion:", msg);