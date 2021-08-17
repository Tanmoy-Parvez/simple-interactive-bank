// deposit section
document.getElementById("deposit-btn").addEventListener("click", function () {
    // capturing deposit input field value
    const depositInputField = document.getElementById("deposit-input");
    const depositInputAmount = parseFloat(depositInputField.value);
    // capturing deposit amount 
    const depositAmountText = document.getElementById("deposit-amount");
    const depositAmount = parseFloat(depositAmountText.innerText);
    //updating deposit amount 
    depositAmountText.innerText = depositAmount + depositInputAmount;
    // capturing total amount
    const totalBalanceText = document.getElementById("balance-total");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    //updating total amount
    totalBalanceText.innerText = totalBalance + depositInputAmount;
    //clear input field
    depositInputField.value = '';

})

// withdraw section
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // capturing deposit input field value
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawInputAmount = parseFloat(withdrawInputField.value);
    // capturing deposit amount
    const withdrawAmountText = document.getElementById("withdraw-amount");
    const withdrawAmount = parseFloat(withdrawAmountText.innerText);
    //updating deposit amount 
    withdrawAmountText.innerText = withdrawAmount + withdrawInputAmount;
    // capturing total amount
    const totalBalanceText = document.getElementById("balance-total");
    const totalBalance = parseFloat(totalBalanceText.innerText);
    //updating total amount
    totalBalanceText.innerText = totalBalance - withdrawInputAmount;
    //clear input field
    withdrawInputField.value = '';

})