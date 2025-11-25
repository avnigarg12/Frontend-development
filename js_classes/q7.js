function validateLogin(username, password) {
    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!userReg.test(username)) return console.log("Invalid username");
    if (!passReg.test(password)) return console.log("Invalid password");

    console.log("Login successful!");
}
