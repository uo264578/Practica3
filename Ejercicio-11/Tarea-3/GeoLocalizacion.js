"use strict";

class Geolocalizacion {
    constructor() {
        this.map = new Map();
        this.inicializar();
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.obtener.bind(this), this.fallo.bind(this));
        } else {
            alert("La Geolocalización no es soportada por navegador.");
        }
    }

    obtener(posicion) {
		this.map.set('longitud', posicion.coords.longitude );
        this.map.set('latitud', posicion.coords.latitude  );
		this.map.set('Precision de la latitud y longitud', posicion.coords.accuracy + " metros");
        this.map.set('altitud', posicion.coords.altitude + " metros");
        this.map.set('precision de la altitud', posicion.coords.altitudeAccuracy + " metros");
        this.map.set('rumbo', posicion.coords.heading + " grados");
        this.map.set('velocidad', posicion.coords.speed + " metros/segundos");
        this.tabla();
    }

	fallo(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
    tabla() {
		
		const ubicacion = $('main')[0];
        const apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        const url = "https://maps.googleapis.com/maps/api/staticmap?";
        const centro = "center=" + this.map.get('latitud') + "," + this.map.get('longitud');
        const zoom = "&zoom=15";
        const dimension = "&size=800x600";
        const marcador = "&markers=color:red%7Clabel:S%7C" + this.map.get('latitud') + "," + this.map.get('longitud');
        const sensor = "&sensor=false";
        const imagenMapa = url + centro + zoom + dimension + marcador
            + sensor + apiKey;
        ubicacion.innerHTML = "<img src='" + imagenMapa + "'/>";
    }
}

const geolocalizacion = new Geolocalizacion();