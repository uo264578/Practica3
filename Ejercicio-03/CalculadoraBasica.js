"use strict";

class Calculator {
    constructor() {
        this.memory = 0;
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

    borrar() {
        const display = document.getElementById("pantalla");
        display.value = "0";
    }

    igual() {
        try {
            const display = document.getElementById("pantalla");
            display.value = eval(display.value);
            this.memory = 0;
        } catch (e) {
            alert('error');
        }
    }

    mMas() {
        try {
            const display = document.getElementById("pantalla");
            this.memory += eval(display.value);
            this.borrar();
        } catch (e) {
            alert('error')
        }
    }

    mMenos() {
        try {
            const display = document.getElementById("pantalla");
            this.memory -= eval(display.value);
            this.borrar();
        } catch (e) {
            alert('error')
        }
    }

    mrc() {
        const display = document.getElementById("pantalla");
        display.value = this.memory;
        this.memory = 0;
    }
}

let calculator = new Calculator();