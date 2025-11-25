let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;

    document.getElementById("display").innerText = JSON.stringify(user, null, 2);
}
