"use strict";

class Geolocalizacion {
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.obtener.bind(this));
        } else {
            alert("La Geolocalización no es soportada por navegador.");
        }
    }

    obtener(posicion) {
        this.map.set('longitud', posicion.coords.longitude + " grados");
        this.map.set('latitud', posicion.coords.latitude + " grados");
		this.map.set('Precision de la latitud y longitud', posicion.coords.accuracy + " metros");
        this.map.set('altitud', posicion.coords.altitude + " metros");
        this.map.set('precision de la altitud', posicion.coords.altitudeAccuracy + " metros");
        this.map.set('rumbo', posicion.coords.heading + " grados");
        this.map.set('velocidad', posicion.coords.speed + " metros/segundos");
        this.mostrar();
    }

    mostrar() {
        const main = $("section");
        main.append("<table>");
        const keys = Array.from(this.map.keys());
        main.append("<th scope='col' id='parametro'>Parametro</th>");
        main.append("<th scope='col' id='valor'>Valor</th>");
        for (let param in keys) {
            main.append("<tr>");
            main.append("<td headers='col'>" + keys[param] + "</td>");
            main.append("<td headers='col'>" + this.map.get(keys[param])
                + "</td>");
            main.append("</tr>");
        }
        main.append("</table>");
    }
}

const geolocalizacion = new Geolocalizacion();