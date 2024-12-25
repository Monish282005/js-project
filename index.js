document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById('loginForm').reset(); // Reset form
    }
});
