"use strict";
class Mapa{
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.localizar.bind(this),this.fallo.bind(this));
        } else {
            alert("No se encuentra el mapa");
        }
    }

    fallo(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
	
	localizar(posicion) {
        mapa.map.set('precision', posicion.coords.accuracy);
        mapa.map.set('altitud', posicion.coords.altitude);
        mapa.map.set('precision altitud', posicion.coords.altitudeAccuracy);
        mapa.map.set('rumbo', posicion.coords.heading);
        mapa.map.set('latitud', posicion.coords.latitude);
        mapa.map.set('longitud', posicion.coords.longitude);
        mapa.map.set('velocidad', posicion.coords.speed);
        mapa.mostrar();
    }

    mostrar() {
        const posicion = {
            lat: this.map.get("latitud"),
            lng: this.map.get("longitud")
        };
        const map = new google.maps.Map($('main')[0],
            {
                zoom: 18,
                center: posicion
            }
        );
        const marker = new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }
}

const mapa = new Mapa();