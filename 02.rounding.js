function rounding(number, n) {
    number = Number(number);
    n = Number(n);
    if (n > 15) {
        n = 15;
    }
    console.log(Number(number.toFixed(n)));
}