function factorial(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log("\t\tFactorial");

console.log("\nFactorial of 7 is:", factorial(7));