"use strict";

class Calculator {
    constructor() {
        this.memoriaPerdidas = 0;
		this.memoriaGastos = 0;
		this.memoriaCondiciones = 0;
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

	borrarDatos() {
        const display = document.getElementById("pantalla");
        display.value = "0";
		this.memoriaPerdidas = 0;
		this.memoriaGastos = 0;
		this.memoriaCondiciones = 0;
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

    gastos() {
        try {
            const display = document.getElementById("pantalla");
            this.memoriaGastos += eval(display.value);
            this.borrar();
        } catch (e) {
            alert('error')
        }
    }
	
	condiciones() {
        try {
            const display = document.getElementById("pantalla");
            this.memoriaCondiciones += eval(display.value);
            this.borrar();
        } catch (e) {
            alert('error')
        }
    }

    perdidas() {
        try {
            const display = document.getElementById("pantalla");
            this.memoriaPerdidas += eval(display.value);
            this.borrar();
        } catch (e) {
            alert('error')
        }
    }

    mrc() {
		try{
			const display = document.getElementById("pantalla");
            display.value = eval(this.memoriaPerdidas + this.memoriaGastos + this.memoriaCondiciones);
            this.memory = 0;
		} catch (e) {
            alert('error');
        }
    }
}

let calculator = new Calculator();