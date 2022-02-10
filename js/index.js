// get button
document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailInput = document.getElementById('user-email');
    const userEnail = emailInput.value;
    // get user password
    const passwordInput = document.getElementById('user-password');
    const userPassword = passwordInput.value;
    // validation
    if (userEnail == 'matir@bank.com' && userPassword == 1234) {
        window.location.href = 'banking.html'
    }
    else {
        alert('Please enter the correct email and password');
    }
})