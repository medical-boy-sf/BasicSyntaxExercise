function bitcoinMining(goldShift) {
    let bitcoins = 0;
    let priceBitcoin = 11949.16;
    let priceGold = 67.51;
    let totalSum = 0;
    let day = 0;
    let dayStart = 0;
    let gold = 0;

    for (let i = 0; i < goldShift.length; i += 1) {
        day += 1;
        if (day % 3 === 0) {
            gold = goldShift[i] - goldShift[i] * 0.30;
        } else {
            gold = goldShift[i];
        }
        totalSum += gold * priceGold;
        while (totalSum >= priceBitcoin) {
            bitcoins += 1;
            if (bitcoins === 1) {
                dayStart = i + 1;
            }
            totalSum -= priceBitcoin;
        }
    }

    if (bitcoins < 1) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayStart}`);
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
    }
}
