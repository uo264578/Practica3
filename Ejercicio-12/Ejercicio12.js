"use strict";

class ApiFile {
    constructor() {
        this.files = [];
    }

    processFiles() {
        this.files = $('#files')[0].files;
        $('#result').empty();
        this.calculateSize();
        this.showFile();
    }

    calculateSize() {
        let nBytes = 0;
        for (let i = 0; i < this.files.length; i++) {
            nBytes += this.files[i].size;
        }
        $("#result").append("<p>Tamaño total: " + nBytes + " bytes </p>");
    }

    showFile() {
        let content = '';
        content += "<h3>Fichero seleccionado</h3>";
        content += "<ul id='listFile'>";
        for (let i = 0; i < this.files.length; i++) {
            this.showContentFile(this.files[i]);
        }
        content += "</ul>";
        $("#result").append(content)
    }

    showContentFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            this.showDetailsFile(file, reader.result);
        };
        reader.readAsText(file, "UTF-8");
    }

    showDetailsFile(file, content) {
        content = this.convertXML(content);
        let details = "<li>" + file.name;
        details += "<ul>";
        details += "<li>Tamaño: " + file.size + " bytes</li>";
        details += "<li>Tipo: " + file.type + "</li>";
        details += "<li>Ultima modificacion: " + file.lastModifiedDate + "</li>";
        details += "<li>Contenido:<pre>" + content + "</pre></li>";
        details += "</ul>";
        details += "</li>";
        $("#listFile").append(details);
    }

    convertXML(content) {
        content = String(content).replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        return content;
    }
}

const apiFile = new ApiFile();