// step-1 : deposit
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2:get the deposit amount from the deposit field
    //For input field use .value to the 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3:get the current deposit total
    //for non-input(element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const updateDepositTotal = previousDepositTotal+newDepositAmount;

    depositTotalElement.innerText = updateDepositTotal;
    depositField.value = '';
    
    // balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const newBalanceTotal = balanceTotal+newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})