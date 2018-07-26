let checkingsTotal = document.getElementById("cbalance"), 
savingsTotal = document.getElementById("sbalance"),
input = document.getElementsByClassName("amount"),
inputValue = input.value,
withdraw = document.getElementById("withdraw"),
deposit = document.getElementById("deposit");

checkings = {
    
}

savings = {

}

// withdraw.addEventListener('click', (subtract) => {
//     newCheckingsTotal = checkingsTotal -= inputValue;
//     checkingsTotal.innerText = `${newCheckingsTotal}`;
//     newSavingsTotal = savingsTotal -= inputValue;
//     savingsTotal.innerText = `${newSavingsTotal}`;
// })

// deposit.addEventListener('click', (add) => {
//     newCheckingsTotal = checkingsTotal += inputValue;
//     checkingsTotal.innerText = `${newCheckingsTotal}`;
//     newSavingsTotal = savingsTotal += inputValue;
//     savingsTotal.innerText = `${newSavingsTotal}`;
// })