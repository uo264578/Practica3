"use strict"
public class TiempoTarifa {
    constructor() {
        this.url = "";
        this.map = new Map();
    }

    loadData() {
		this.url = "http://api.openweathermap.org/data/2.5/weather?q=Tarifa,ES&units=metric&lang=es&APPID=76f930f74c5541522f0143430bceb0ca";
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: (datos) => {
                let div = $("div");
                div.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                div.prepend("<h3>JSON recibido</h3>");
                this.map.set("Ciudad", datos.name);
                this.map.set("Pais", datos.sys.country);
                this.map.set("Latitud", datos.coord.lat + " grados");
				this.map.set("Longitud", datos.coord.lon + " grados");
                this.map.set("Temperatura", datos.main.temp + " grados Celcius");
                this.map.set("Temperatura máxima", datos.main.temp_max + " grados Celsius");
                this.map.set("Temperatura mínima", datos.main.temp_min + " grados Celsius");
                this.map.set("Presión", datos.main.pressure + " milibares");
                this.map.set("Humedad", datos.main.humidity + " %");
                this.map.set("Amanece a las", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                this.map.set("Oscurece a las", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                this.map.set("Direccion del viento", datos.wind.deg + " grados");
                this.map.set("Velocidad del viento", datos.wind.speed + " metros/segundo");
                this.map.set("Hora de la medida", new Date(datos.dt * 1000).toLocaleTimeString());
                this.map.set("Fecha de la medida", new Date(datos.dt * 1000).toLocaleDateString());
                this.map.set("Descripción", datos.weather[0].description);
                this.map.set("Visibilidad", datos.visibility + " metros");
                this.map.set("Nubosidad", datos.clouds.all + "%");
                div.append("<table>");
                this.addTable();
                div.append("</table>");
				
            },
            error: function () {
                alert("No se puede abrir");
            }
        });
    }

    showData() {
        let div = $("div");
        div.empty();
        this.loadData();
    }

    addTable() {
        let keys = Array.from(this.map.keys());
        let table = $("table");
        table.append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        table.append("<th scope=\"col\" id=\"valor\">Valor</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers=\"col\">" + keys[param] + "</td>");
            table.append("<td headers=\"col\">" + this.map.get(keys[param]) + "</td>");
            table.append("</tr>");
        }

    }
}

let tiempoTarifa = new TiempoTarifa();


class TiempoLogroño {
    constructor() {
        this.url = "";
        this.map = new Map();
    }

    loadData() {
		this.url = "http://api.openweathermap.org/data/2.5/weather?q=Logroño,ES&units=metric&lang=es&APPID=76f930f74c5541522f0143430bceb0ca";
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: (datos) => {
                let div = $("div");
                div.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                div.prepend("<h3>JSON recibido</h3>");
                this.map.set("Ciudad", datos.name);
                this.map.set("Pais", datos.sys.country);
                this.map.set("Latitud", datos.coord.lat + " grados");
				this.map.set("Longitud", datos.coord.lon + " grados");
                this.map.set("Temperatura", datos.main.temp + " grados Celcius");
                this.map.set("Temperatura máxima", datos.main.temp_max + " grados Celsius");
                this.map.set("Temperatura mínima", datos.main.temp_min + " grados Celsius");
                this.map.set("Presión", datos.main.pressure + " milibares");
                this.map.set("Humedad", datos.main.humidity + " %");
                this.map.set("Amanece a las", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                this.map.set("Oscurece a las", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                this.map.set("Direccion del viento", datos.wind.deg + " grados");
                this.map.set("Velocidad del viento", datos.wind.speed + " metros/segundo");
                this.map.set("Hora de la medida", new Date(datos.dt * 1000).toLocaleTimeString());
                this.map.set("Fecha de la medida", new Date(datos.dt * 1000).toLocaleDateString());
                this.map.set("Descripción", datos.weather[0].description);
                this.map.set("Visibilidad", datos.visibility + " metros");
                this.map.set("Nubosidad", datos.clouds.all + "%");
                div.append("<table>");
                this.addTable();
                div.append("</table>");
				
            },
            error: function () {
                alert("No se puede abrir");
            }
        });
    }

    showData() {
        let div = $("div");
        div.empty();
        this.loadData();
    }

    addTable() {
        let keys = Array.from(this.map.keys());
        let table = $("table");
        table.append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        table.append("<th scope=\"col\" id=\"valor\">Valor</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers=\"col\">" + keys[param] + "</td>");
            table.append("<td headers=\"col\">" + this.map.get(keys[param]) + "</td>");
            table.append("</tr>");
        }

    }
}

let tiempoLogroño = new TiempoLogroño();

class TiempoSalamanca {
    constructor() {
        this.url = "";
        this.map = new Map();
    }

    loadData() {
		this.url = "http://api.openweathermap.org/data/2.5/weather?q=Salamanca,ES&units=metric&lang=es&APPID=76f930f74c5541522f0143430bceb0ca";
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: (datos) => {
                let div = $("div");
                div.prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                div.prepend("<h3>JSON recibido</h3>");
                this.map.set("Ciudad", datos.name);
                this.map.set("Pais", datos.sys.country);
                this.map.set("Latitud", datos.coord.lat + " grados");
				this.map.set("Longitud", datos.coord.lon + " grados");
                this.map.set("Temperatura", datos.main.temp + " grados Celcius");
                this.map.set("Temperatura máxima", datos.main.temp_max + " grados Celsius");
                this.map.set("Temperatura mínima", datos.main.temp_min + " grados Celsius");
                this.map.set("Presión", datos.main.pressure + " milibares");
                this.map.set("Humedad", datos.main.humidity + " %");
                this.map.set("Amanece a las", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                this.map.set("Oscurece a las", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                this.map.set("Direccion del viento", datos.wind.deg + " grados");
                this.map.set("Velocidad del viento", datos.wind.speed + " metros/segundo");
                this.map.set("Hora de la medida", new Date(datos.dt * 1000).toLocaleTimeString());
                this.map.set("Fecha de la medida", new Date(datos.dt * 1000).toLocaleDateString());
                this.map.set("Descripción", datos.weather[0].description);
                this.map.set("Visibilidad", datos.visibility + " metros");
                this.map.set("Nubosidad", datos.clouds.all + "%");
                div.append("<table>");
                this.addTable();
                div.append("</table>");
				
            },
            error: function () {
                alert("No se puede abrir");
            }
        });
    }

    showData() {
        let div = $("div");
        div.empty();
        this.loadData();
    }

    addTable() {
        let keys = Array.from(this.map.keys());
        let table = $("table");
        table.append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        table.append("<th scope=\"col\" id=\"valor\">Valor</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers=\"col\">" + keys[param] + "</td>");
            table.append("<td headers=\"col\">" + this.map.get(keys[param]) + "</td>");
            table.append("</tr>");
        }

    }
}

let tiempoSalamanca = new TiempoSalamanca();