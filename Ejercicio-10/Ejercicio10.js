"use strict";

class Dinero {
    constructor() {
        this.map = new Map();
    }

    showData() {
        let div = $("div");
        div.empty();
        this.loadData();
    }

    loadData() {
        $.ajax({
            dataType: "json",
            url: 'http://data.fixer.io/api/latest?access_key=37d77dc0dcb44119653648f9b5bdbb0e',
            method: 'GET',
            success: (datos) => {
                for (let res in datos.rates) {
                    this.map.set("" + res, datos.rates[res]);
                }
                const div = $("div");
                div.append("<table>");
                this.addTable();
                div.append("</table>");
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de monedas");
            }
        });
    }

    addTable() {
        const keys = Array.from(this.map.keys());
        let table = $("table");
        table.append("<th scope='col' id='parametro'>Moneda</th>");
        table.append("<th scope='col' id='valor'>Valor con el Euro</th>");
        for (let param in keys) {
            table.append("<tr>");
            table.append("<td headers='col'>" + keys[param] + "</td>");
            table.append("<td headers='col'>" + this.map.get(keys[param]) + "</td>");
            table.append("</tr>");
        }
    }
}

let dinero = new Dinero();