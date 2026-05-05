function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.textContent = "All fields are required";
        msg.style.color = "red";
        return false;
    }

    if (user.length < 4) {
        msg.textContent = "Username must be at least 4 characters";
        msg.style.color = "red";
        return false;
    }

    if (pass.length < 6) {
        msg.textContent = "Password must be at least 6 characters";
        msg.style.color = "red";
        return false;
    }

    msg.textContent = "Login successful";
    msg.style.color = "green";
    return true; // prevent actual form submit for demo
}