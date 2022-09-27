// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositField = document.getElementById('deposit');
    const newDepositString = newDepositField.value;
    const newDeposit = parseFloat(newDepositString);

    newDepositField.value = '';
    if (newDeposit < 1 || isNaN(newDeposit)) {
        alert('Enter valid number');
        return;
    }

    const pastDepositField = document.getElementById('deposit-text');
    const pastDepositString = pastDepositField.innerText;
    const pastDeposit = parseFloat(pastDepositString);

    const pastBalanceField = document.getElementById('balance-text');
    const pastBalanceString = pastBalanceField.innerText;
    const pastBalance = parseFloat(pastBalanceString);

    pastDepositField.innerText = newDeposit + pastDeposit;
    pastBalanceField.innerText = pastBalance + newDeposit;
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawField = document.getElementById('withdraw');
    const newWithdrawString = newWithdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    newWithdrawField.value = '';
    if (newWithdraw < 1 || isNaN(newWithdraw)) {
        alert('Enter valid number');
        return;
    }

    const pastWithdrawField = document.getElementById('withdraw-text');
    const pastWithdrawString = pastWithdrawField.innerText;
    const pastWithdraw = parseFloat(pastWithdrawString);

    const pastBalanceField = document.getElementById('balance-text');
    const pastBalanceString = pastBalanceField.innerText;
    const pastBalance = parseFloat(pastBalanceString);

    if (newWithdraw > pastBalance) {
        alert('Balance is not enough');
        return;
    }

    pastWithdrawField.innerText = newWithdraw + pastWithdraw;
    pastBalanceField.innerText = pastBalance - newWithdraw;
})