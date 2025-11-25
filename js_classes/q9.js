class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)(\d{2})$/;
        const match = code.match(reg);
        if (!match) return "Invalid coupon";

        const discount = parseInt(match[2]);
        return this.getTotal() * (1 - discount / 100);
    }
}

const cart = new Cart();
cart.addItem("Item1", 200, 2);
cart.addItem("Item2", 500, 1);
console.log(cart.applyCoupon("SAVE20"));
