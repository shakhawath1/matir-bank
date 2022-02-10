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