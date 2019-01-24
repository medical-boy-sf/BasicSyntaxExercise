function division(number) {
    number = Number(number);
    let maxDivider = 0;

    if(number % 10 == 0) {
        maxDivider = 10;
    } else if(number % 7 == 0) {
        maxDivider = 7;
    } else if(number % 6 == 0) {
        maxDivider = 6;
    } else if(number % 3 == 0) {
        maxDivider = 3;
    } else if(number % 2 == 0) {
        maxDivider = 2;
    } else {
        console.log("Not divisible");
        return;
    }

    console.log(`The number is divisible by ${maxDivider}`);
}