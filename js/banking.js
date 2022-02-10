// handle deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit input amount
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // set deposit amoumt
    const totalDepositText = document.getElementById('total-deposit');
    const previousDeposit = parseFloat(totalDepositText.innerText);
    const newDepositTotal = previousDeposit + depositAmount;
    totalDepositText.innerText = newDepositTotal;
    // update balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const balanceTotal = parseFloat(totalBalanceText);
    const newBalance = balanceTotal + depositAmount;
    totalBalance.innerText = newBalance;
    depositInput.value = '';
})
// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw input amount
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw amoumt
    const totalWithdrawText = document.getElementById('total-withdraw');
    const previousWithdraw = parseFloat(totalWithdrawText.innerText);
    const newWithdrawTotal = previousWithdraw + withdrawAmount;
    totalWithdrawText.innerText = newWithdrawTotal;

    // update balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const balanceTotal = parseFloat(totalBalanceText);
    const newBalance = balanceTotal - withdrawAmount;
    totalBalance.innerText = newBalance;
    withdrawInput.value = '';


})

