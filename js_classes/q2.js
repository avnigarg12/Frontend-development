function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameReg = /^[A-Za-z]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^\d{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    validateField(name, nameReg, "Name invalid");
    validateField(email, emailReg, "Email invalid");
    validateField(phone, phoneReg, "Phone invalid");
    validateField(password, passReg, "Password invalid");
}

function validateField(field, regex, msg) {
    if (!regex.test(field.value)) {
        field.style.border = "2px solid red";
        field.nextElementSibling.innerText = msg;
    } else {
        field.style.border = "2px solid green";
        field.nextElementSibling.innerText = "";
    }
}
