'use strict';

class KML {
    constructor() {
    }

    init() {
        const file = this.files = document.getElementById('files').files[0];
        if (file.name.includes('.kml')) {
            const reader = new FileReader();
            reader.onload = () => {
                const map = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 14,
                });
                const geoXml = new geoXML3.parser({map: map});
                geoXml.parseKmlString(reader.result);
            };
            reader.readAsText(file);
        } else {
            alert("Error al abrir el kml");
        }
    }
}

const kml = new KML();
