"use strict";
class Mapa{
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.mostrar.bind(this),this.errores.bind(this));
        } else {
            alert("Map not found");
        }
    }

    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }

    mostrar() {
        const tartiere = {
            lat: 43.35986,
            lng: -5.869177
        };
        const map = new google.maps.Map($('main')[0],
            {
                zoom: 17,
                center: tartiere
            }
        );
        const marker = new google.maps.Marker({
            position: tartiere,
            map: map
        });
    }
}

const mapa = new Mapa();