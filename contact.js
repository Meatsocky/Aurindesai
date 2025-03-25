function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    // Basic name validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Basic message validation
    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return false;
    }

    return true;
}
