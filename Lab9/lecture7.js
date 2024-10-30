let car = {
    speedometer: 0,

    setSpeed: function(value) {
        this.speedometer = value;
        return this;
    },

    getSpeed: function() {
        console.log(this.speedometer);
        return this;
    },

    clearSpeed: function() {
        this.speedometer = 0;
        return this;
    }
};

// Приклад
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed();
