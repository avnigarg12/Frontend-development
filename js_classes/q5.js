function validateBooking(name, email, seats) {
    const nameReg = /^[A-Za-z]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsReg = /^(?:[1-9]|10)$/;

    if (nameReg.test(name) && emailReg.test(email) && seatsReg.test(seats)) {
        const ticket = { name, email, seats };
        console.log("Ticket:", ticket);
    } else {
        console.log("Invalid details");
    }
}
