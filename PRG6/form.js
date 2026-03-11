function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = "";
    if (name == "") {
        errorMessage += "Name must be filled out.\n";
    }       
    if (email == "") {
        errorMessage += "Email must be filled out.\n";
    }
    if (password == "") {
        errorMessage += "Password must be filled out.\n";
    } else if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
    }   
    if (errorMessage != "") {
        alert(errorMessage);
        return false;
    }
    else {
        alert("Form submitted successfully!");
    }
    return true;
}

