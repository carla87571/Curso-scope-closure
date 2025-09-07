function greeting() {
    let username = 'Oscar';

    function displayUserName() {
        return `Hello ${username}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g); // [Function: displayUserName]
console.log(g()); // Hello Oscar
greeting();

// EJEMPLO 1: Cuenta Bancaria

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);