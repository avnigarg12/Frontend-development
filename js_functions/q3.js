const user = {
    name: "Avani",
    showName: () => {
        console.log(this.name);
    }
};

// this.name is undefined because arrow functions do NOT have their own 'this'.
user.showName();

const userFixed = {
    name: "Avani",
    showName: function () {
        console.log(this.name);
    }
};

userFixed.showName();
