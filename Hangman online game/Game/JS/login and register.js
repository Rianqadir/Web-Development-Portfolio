// Login and register page
function User(username, email, dob, password) {
    this.username = username;
    this.email = email;
    this.dob = dob;
    this.password = password;
    this.score = 0; // Initialize score to 0, you can adjust as needed
}

// Validate login credentials
function validateLoginForm() {
    var loginEmail = document.getElementById("login-email").value.trim();
    var loginPassword = document.getElementById("login-password").value.trim();

    // Check if both email and password are provided
    if (loginEmail === "" || loginPassword === "") {
        console.log("Please enter both email and password.");
        return false;
    }

    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem("user")) || [];

    // Check if a user with the provided email and password exists
    var loggedInUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (loggedInUser) {
        // Set the logged-in user in local storage
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        showWelcomeMessage(loggedInUser);
        return true;
    } else {
        console.log("Invalid email or password. Please try again.");
        return false;
    }
}

// Validate registration form
function validateRegisterForm() {
    var newUsername = document.getElementById("new-username").value.trim();
    var newEmail = document.getElementById("new-email").value.trim();
    var newDob = document.getElementById("new-dob").value.trim();
    var newPassword = document.getElementById("new-password").value.trim();

    // Check if any field is empty
    if (newUsername === "" || newEmail === "" || newDob === "" || newPassword === "") {
        alert("Please fill in all fields for registration.");
        return false;
    }

    // Check if the username contains only letters and numbers
    if (!/^[a-zA-Z0-9]+$/.test(newUsername)) {
        alert("Username can only contain letters and numbers.");
        return false;
    }

    // Check if the email is in a valid format
    if (!isValidEmail(newEmail)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate the date of birth (you can customize the criteria)
    // Example: Check if the user is at least 18 years old
    var dobDate = new Date(newDob);
    var currentDate = new Date();
    var minAge = 3;
    if (currentDate.getFullYear() - dobDate.getFullYear() < minAge) {
        alert("You must be at least 3 years old to register.");
        return false;
    }

    // Check password complexity (e.g., at least 6 characters, one uppercase, one lowercase, and one digit)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(newPassword)) {
        alert("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.");
        return false;
    }

    // Create a new User object
    var newUser = new User(newUsername, newEmail, newDob, newPassword);

    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem("user")) || [];

    // Check if email already exists
    var existingUser = users.find(u => u.email === newEmail);

    if (existingUser) {
        alert("An account with this email already exists. Please use a different email.");
        return false;
    }

    // Save new user to local storage
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));

    // Set the logged-in user in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    showWelcomeMessage(newUser);

    return true;
}

// Function to validate email format
function isValidEmail(email) {
    // You can use a more sophisticated email validation regex if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to show a welcome message (customize as needed)
function showWelcomeMessage(user) {
    alert("Welcome, " + user.username + "!");
}

 // Display validation conditions in a paragraph
 var validationParagraph = document.getElementById("registration-validation");
            validationParagraph.innerHTML = "Registration Conditions: <br>" +
                "1. Username can only contain letters and numbers.<br>" +
                "2. Please enter a valid email address.<br>" +
                "3. You must be at least 3 years old to register.<br>" +
                "4. Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.<br>" ;