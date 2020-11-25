"use strict";

class Calculadora {
    constructor() {
        this.pantalla = "0";
        this.memoria = "";
        this.memoriaActual = "";
        this.esResultado = false;
    }

    actualizarPantalla() {
        var p = document.getElementById("pantalla");
        p.value = this.pantalla;
    }

    agregarDisplay(digito) {
        if (this.esResultado) {
            this.limpiarResultado();
            this.pantalla = digito;
        }
        else if ("0" == this.pantalla) {
            this.pantalla = digito;
        }
        else {
            this.pantalla += digito;
        }
        this.esResultado = false;
        this.actualizarPantalla();
    }

    agregarPunto() {
        if (!this.pantalla.includes(".")) {
            this.pantalla += ".";
        }
        this.actualizarPantalla();
    }

    limpiarDisplay() {
        this.pantalla = "0";
        this.actualizarPantalla();
    }

    limpiarResultado() {
        this.limpiarDisplay();
        this.memoriaActual = "";
    }

    limpiarTodo() {
        this.limpiarResultado();
        this.memoria = "";
    }

    operacion(operador) {
        this.memoriaActual += this.pantalla + " " + operador;
        this.limpiarDisplay();
    }

    mostrarResultado() {
        this.memoriaActual += this.pantalla;
        this.pantalla = eval(this.memoriaActual);
        this.actualizarPantalla();
        this.esResultado = true;
    }

    memoriaMas() {
        this.memoria += "+" + this.pantalla;
        this.memoria = eval(this.memoria);
        this.limpiarDisplay();
    }

    memoriaMenos() {
        this.memoria += "-" + this.pantalla;
        this.memoria = eval(this.memoria);
        this.limpiarDisplay();
    }

    memoriaMostrar() {
        this.pantalla = this.memoria;
        this.memoriaActual = "";
        this.actualizarPantalla();
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }

    operacion(operador) {
        this.pantalla += operador;
        this.actualizarPantalla();
    }

    cambiarSigno() {
        if ("+" == this.pantalla.substring(0, 1)) {
            this.pantalla = "-" + this.pantalla.substring(1, this.pantalla.length);
        } else if ("-" == this.pantalla.substring(0, 1)) {
            this.pantalla = "+" + this.pantalla.substring(1, this.pantalla.length);
        } else
            this.pantalla = "+" + this.pantalla.substring(0, this.pantalla.length);
        this.memoriaActual = this.pantalla;
        this.actualizarPantalla();
    }

    factorial() {
        var x = eval(this.pantalla);
        x = parseInt(x, 10);
        if (isNaN(x)) return 1;

        if (x <= 0) return 1;
        if (x > 170) return Infinity;
        var y = 1;
        for (var i = x; i > 0; i--) {
            y *= i;
        }
        this.pantalla = y;
        this.memoriaActual = this.pantalla;
        this.actualizarPantalla();
    }

    limpiarDisplayParte() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
        this.actualizarPantalla();
    }

    calcularMath(operador) {
        var aux = eval(this.pantalla);
        switch (operador) {
            case "e":
                aux = Math.exp(aux);
                break;
            case "log":
                aux = Math.log(aux);
                break;
            case "x":
                aux = Math.pow(10, aux);
                break;
            case "y":
                aux = Math.pow(aux, this.memoria);
                break;
            case "raiz":
                aux = Math.sqrt(10, aux);
                break;
            case "sin":
                aux = Math.sin(10, aux);
                break;
            case "cos":
                aux = Math.cos(10, aux);
                break;
            case "tan":
                aux = Math.tan(10, aux);
                break;
            case "2":
                aux = Math.pow(aux, 2);
                break;
        }
        this.pantalla = aux;
        this.memoriaActual = this.pantalla;
        this.actualizarPantalla();
    }
}

var calculadora = new CalculadoraCientifica();