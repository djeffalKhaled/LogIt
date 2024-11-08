var inhandMoney = 0;
var accountMoney = 0;
var totalMoney = 0;

// Loads the saved content from localSorage upon loading the webpage if it exists
document.addEventListener('DOMContentLoaded', function(event) {
    if(localStorage.getItem('inhandMoney')) {
        inhandMoney = parseInt(localStorage.getItem('inhandMoney'));
    }
    if(localStorage.getItem('accountMoney')) {
        accountMoney = parseInt(localStorage.getItem('accountMoney'));
    }
    if(localStorage.getItem('totalMoney')) {
        totalMoney = parseInt(localStorage.getItem('totalMoney'));
    }
    update(inhandMoney);
});

function update(x) {
    let MoneyAmount = document.getElementById("MoneyAmount");
    MoneyAmount.innerText = x;

    totalMoney = inhandMoney + accountMoney;
}

function ParseInput(strArray, money) {
    console.log("Input result: ", strArray);
    let strInt = parseInt(strArray.substring(1), 10); 
    switch(strArray[0]) {
        case '+':
            result = money + strInt;
            update();
            console.log("depositing :", strInt);
            break;
        case '-':
            result = money - strInt;
            update();
            console.log("widrawing :", strInt);
            break;
        default:
            alert("Error! Use +amount or -amount!")
            break;
    }
    return result;
}

const inhandMode = document.getElementById("inhand");
const accountMode = document.getElementById("account");
const totalMode = document.getElementById("total");

function changeMode() {
    if (inhandMode.checked) {
       update(inhandMoney);
    }
    else if (accountMode.checked) {
        update(accountMoney);
    }
    else if (totalMode.checked) {
        update(totalMoney);
    }
    else {
        alert("Mode Change Error!");
    }
}

// Main function for depositing, withdrawing, and saving the content into localstorage
function DepositWithdraw () {
    let inputValue = document.getElementById("DepositWithdrawInput").value;
    if (inhandMode.checked) {
        inhandMoney = ParseInput(inputValue, inhandMoney);
        update(inhandMoney);
        console.log("updated inhandMoney: ", inhandMoney);
        localStorage.setItem('inhandMoney', inhandMoney);
        localStorage.setItem('totalMoney', totalMoney);
    }
    else if (accountMode.checked) {
        accountMoney = ParseInput(inputValue, accountMoney);
        update(accountMoney);
        console.log("updated accountMoney: ", inhandMoney);
        localStorage.setItem('accountMoney', accountMoney);
        localStorage.setItem('totalMoney', totalMoney);
    }
    else if (totalMode.checked) {
        alert("Can only deposit / withdraw in Inhand or Account modes");
    }
    else {
        alert("Deposit / Widrawl Error!");
    }
}