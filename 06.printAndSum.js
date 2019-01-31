function printAndSum(start, end) {
    start = Number(start);
    end = Number(end);
    let sum = 0;
    let sequence = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        sequence += i + " ";
    }
    console.log(sequence);
    console.log(`Sum: ${sum}`);
}
