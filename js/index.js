document.getElementById("login-btn").addEventListener('click', function () {
    const emailField = document.getElementById("email").value;
    const passwordField = document.getElementById("password").value;
    if (emailField == "email@gmail.com" && passwordField == 123) {
        window.location.href = 'banking.html';
    }
    else {
        alert('Email:email@gmail.com Pass:123')
    }
})