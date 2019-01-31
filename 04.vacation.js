function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let groupOfPeople = Number(groupOfPeople);
    let typeOfGroup = typeOfGroup.toLowerCase();
    let dayOfWeek = dayOfWeek.toLowerCase();
    let price = 0;
    let discount = 0;

    if (typeOfGroup === "students") {
        if (dayOfWeek === "friday") {
            price = 8.45;
        } else if (dayOfWeek === "saturday") {
            price = 9.8;
        } else if(dayOfWeek === "sunday") {
            price = 10.46;
        }

        if (groupOfPeople >= 30) {
            discount = 0.15;
        }

    } else if(typeOfGroup === "business") {
        if (dayOfWeek === "friday") {
            price = 10.9;
        } else if (dayOfWeek === "saturday") {
            price = 15.6;
        } else if(dayOfWeek === "sunday") {
            price = 16;
        }

        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }
    } else if(typeOfGroup === "regular") {
        if (dayOfWeek === "friday") {
            price = 15;
        } else if (dayOfWeek === "saturday") {
            price = 20;
        } else if(dayOfWeek === "sunday") {
            price = 22.5;
        }

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            discount = 0.05;
        }
    }

    let finalSum = groupOfPeople * price;
    finalSum = finalSum - finalSum * discount;
    console.log(`Total price: ${finalSum.toFixed(2)}`);
}