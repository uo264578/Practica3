'use strict';

class MapaGeoJSON {
    constructor() {
    }

    init() {
        const file = document.getElementById("files").files[0];
        if (file.name.includes('.geoJSON')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 6,
                    center: {lat: 43.53968485, lng: -5.66681153}
                });
                const json = JSON.parse(reader.result);
                map.data.addGeoJson(json);
            };
            reader.readAsText(file);
        } else {
            alert("Error: ¡Archivo no válido!");
        }
    }
}

const map = new MapaGeoJSON();