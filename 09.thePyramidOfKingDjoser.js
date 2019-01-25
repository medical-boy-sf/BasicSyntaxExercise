function thePyramidOfKingDjoser(base, increment) {
    base = parseFloat(base);
    increment = parseFloat(increment);
    let totalHeight = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 0;

    while (base > 2) {
        counter += 1;
        let outerLayer = 0;
        let total = base * base;
        outerLayer = 4 * base - 4;
        stone += (total - outerLayer);

        if (counter % 5 === 0) {
            lapisLazuli += outerLayer;
        } else {
            marble += outerLayer;
        }

        if (base > 2) {
            base -= 2;
        }
    }

    counter += 1;

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(base * base * increment);
    totalHeight = Math.floor(counter * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}
thePyramidOfKingDjoser(5, 1);