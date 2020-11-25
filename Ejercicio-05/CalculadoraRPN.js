"use strict";

class Calculator {
    constructor() {
        this.stack = [];
    }

    display(digit) {
        let display = document.getElementById("pantalla");
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value += digit;
        }
    }

    operationAdd(operation) {
        if (this.stack.length >= 2) {
            const left = this.stack.pop();
            const right = this.stack.pop();
            const result = eval(right + operation + left);
            this.stack.push(result);
            document.getElementById("resultado").value = result;
        } else {
            alert('Fallo');
        }
    }

    operationAddNumber(number) {
        if (Number.isNaN(number)) {
            alert('No es un numero');
        } else {
            this.stack.push(number);
        }
    }

    enter() {
        const value = document.getElementById("pantalla").value;
        this.operationAddNumber(value);
        document.getElementById("pantalla").value = 0;
    }

    operaciones2(operator) {
        let result = 0;
        if (this.stack.length >= 1) {
            switch (operator) {
                case 'sin':
                    result = Math.sin(this.stack.pop());
                    break;
                case 'cos':
                    result = Math.cos(this.stack.pop());
                    break;
                case 'tan':
                    result = Math.tan(this.stack.pop());
                    break;
                default:
                    result = 0;
            }
            document.getElementById("resultado").value = result;
            this.stack.push(result);
            document.getElementById("pantalla").value = 0;
        } else {
            alert('No es una operacion, puede ser que no hay numeros en la pila')
        }
    }

    clean() {
        this.stack = [];
        document.getElementById("pantalla").value = 0;
        document.getElementById("resultado").value = 0;
    }
}

let calculator = new Calculator();