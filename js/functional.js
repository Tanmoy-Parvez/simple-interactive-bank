function getInputValue(inputValue) {
    // capturing input field values
    const InputField = document.getElementById(inputValue);
    const InputAmount = parseFloat(InputField.value);
    //clear input field
    InputField.value = '';
    return InputAmount;
}

function updatedAmount(currentAmount, inputAmount) {
    // capturing deposit/withdraw section amount 
    const currentAmountText = document.getElementById(currentAmount);
    const amountCurrent = parseFloat(currentAmountText.innerText);
    //  updating it
    currentAmountText.innerText = amountCurrent + inputAmount;
}

function updatingTotalBalance(inputAmount, isAdd) {
    // capturing total amount
    const totalBalanceText = document.getElementById("balance-total");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    if (isAdd == true) {
        //updating total amount
        totalBalanceText.innerText = totalBalance + inputAmount;
    }
    else {
        //updating total amount
        totalBalanceText.innerText = totalBalance - inputAmount;
    }
}

function currentBalance() {
    //again capturing total amount for validation condition 
    const totalBalanceText = document.getElementById("balance-total");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    return totalBalance;
}


// deposit section
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInputAmount = getInputValue("deposit-input");
    if (depositInputAmount > 0) {
        updatedAmount("deposit-amount", depositInputAmount);
        updatingTotalBalance(depositInputAmount, true);
    }
})

// withdraw section
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInputAmount = getInputValue("withdraw-input");
    const totalBalance = currentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < totalBalance) {
        updatedAmount("withdraw-amount", withdrawInputAmount);
        updatingTotalBalance(withdrawInputAmount, false);
    }
    else {
        alert("You can not withdraw more than " + totalBalance);
    }
})
