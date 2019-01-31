function login(arrPasswords) {
    let userName = arrPasswords[0];
    let password = [];
    let counter = 0;

    for (let i = 0; i < userName.length; i++) {
        password[i] = userName[userName.length - i - 1];
    }

    password = password.join("");

    for (let j = 1; j < arrPasswords.length; j++) {
        if (arrPasswords[j] !== password) {
            console.log("Incorrect password. Try again.");
            counter += 1;
        } else {
            console.log(`User ${userName} logged in.`);
            break;
        }

        if (counter === 3) {
            console.log(`User ${userName} blocked!`);
            break;
        }
    }
}
