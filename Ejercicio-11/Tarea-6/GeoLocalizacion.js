"use strict";

class Tiempo {
    constructor() {
        this.apikey = "76f930f74c5541522f0143430bceb0ca";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.datos = new Map();
        this.mapa = $("#mapa");
        this.tiempo = $("#weather");
    }

    modificarCiudad() {
        this.ciudad = $("#ciudad").val();
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad
            + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }

    limpiarDatos() {
        this.mapa.empty();
        this.tiempo.empty();
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: (datos) => {
                this.limpiarDatos();
                this.tiempo.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                this.tiempo.prepend("<h3>JSON recibido</h3>");
                this.datos.set("Ciudad", datos.name);
                this.datos.set("Pais", datos.sys.country);
                this.datos.set("Latitud", datos.coord.lat);
                this.datos.set("Longitud", datos.coord.lon);
                this.datos.set("Temperatura", datos.main.temp + " ºC");
                this.datos.set("Temperatura máxima", datos.main.temp_max + " ºC");
                this.datos.set("Temperatura mínima", datos.main.temp_min + " ºC");
                this.datos.set("Presión", datos.main.pressure + " milibares");
                this.datos.set("Humedad", datos.main.humidity + " %");
                this.datos.set("Amanece", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                this.datos.set("Oscurece", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                this.datos.set("Direccion del viento", datos.wind.deg + "º");
                this.datos.set("Velocidad del viento", datos.wind.speed + " m/s");
                this.datos.set("Hora", new Date(datos.dt * 1000).toLocaleTimeString());
                this.datos.set("Fecha", new Date(datos.dt * 1000).toLocaleDateString());
                this.datos.set("Descripción", datos.weather[0].description);
                this.datos.set("Visibilidad", datos.visibility + " m");
                this.datos.set("Nubosidad", datos.clouds.all);
                this.mostrarDatos();
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de OpenWeatherMap");
            }
        });
    }

    mostrarDatos() {
        this.tiempo.append("<table id='tablaTiempo'>");
        const tablaTiempo = $("#tablaTiempo");
        tablaTiempo.append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        tablaTiempo.append("<th scope=\"col\" id=\"valor\">Valor</th>");
        const keys = Array.from(this.datos.keys());
        for (const parametro in keys) {
            this.añadirTabla(keys[parametro]);
        }
        this.tiempo.append("</table>");
        new Mapa(this.datos.get("Latitud"), this.datos.get("Longitud"));

    }

    añadirTabla(parametro) {
        $("table").append("<tr>");
        $("table").append("<td headers=\"col\">" + parametro + "</td>");
        $("table").append("<td headers=\"col\">" + this.datos.get(parametro) + "</td>");
        $("table").append("</tr>");
    }
}

const tiempo = new Tiempo();

class Mapa {
    constructor(latitud, longitud) {
        this.lat = latitud;
        this.lon = longitud;
        const dimension = $(window).height() - $("h1").outerHeight(true) - $("h3").outerHeight(true);
        $("#mapa").css("height", "" + dimension + "px");
        this.mostrar();
    }

    mostrar() {
        const localizacion = {
            lat: this.lat,
            lng: this.lon
        };
        const map = new google.maps.Map(document.getElementById("mapa"), {
            zoom: 13,
            center: localizacion
        });
        new google.maps.Marker({
            position: localizacion,
            map: map
        });
    }
}