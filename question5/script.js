document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    if (userName.value.trim() === "" || password.value.trim() === "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter both username and password.";
        return false;
    }
    errorMessage.textContent = "";
    console.log("Form submitted successfully!");
    return true;
}