// Login
document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if (email === 'name@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Email : name@gmail.com Password : secret');
    }
})