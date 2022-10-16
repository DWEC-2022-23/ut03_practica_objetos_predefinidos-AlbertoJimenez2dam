"use strict";

/*
 * Muestra la respuesta en una alerta
 */
function addAnswer(thisElementName, thisAnswer) {
    let thisElement = document.getElementById(thisElementName);
    alert(thisAnswer);
    /*
     * Antiguo código para mostrar en página; no utilizado
     */
    /*
    let newTextNode = document.createElement('span');
    newTextNode.id = thisElementName + 'Answer';
    newTextNode.innerHTML = thisAnswer;

    let existingAnswer = document.getElementById(thisElementName + 'Answer');

    if (existingAnswer !== null) {
        existingAnswer.remove();
    }

    thisElement.appendChild(newTextNode)*/
}



/*
 * Funciones para llamadas
 */
function reyesMagos(inputDateValue) {
    if (!inputDateValue) {
        addAnswer('boxReyesMagos', 'Introduce una fecha.');

        return;
    }

    let inputDate = new Date(inputDateValue);

    let nextYear = inputDate.getFullYear() + 1;
    let curMonth = inputDate.getMonth() + 1;
    let curDay = inputDate.getDate();

    if (curMonth <= 1 && curDay <= 6) {
        nextYear = nextYear - 1;
    }


    let magicDate = new Date(nextYear + '.01.06')

    let remainingDays = Math.floor((magicDate.getTime() - inputDate.getTime()) / 1000 / 3600 / 24 + 1);

    addAnswer('boxReyesMagos', 'Quedan ' + remainingDays + ' días para que vengan los Reyes Magos.');
}

function dateTime() {
    let dayWeekArr = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    let monthArr = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    let dayWeek = dayWeekArr[new Date().getDay()];
    let day = new Date().getDate();
    let month = monthArr[new Date().getMonth()];
    let year = new Date().getFullYear();
    let hour = String(new Date().getHours()).padStart(2, 0);
    let minute = String(new Date().getMinutes()).padStart(2, 0);

    alert(`Hoy es ${dayWeek}, ${day} de ${month} de ${year} y son las ${hour}:${minute} horas.`);
}

function calcularAreaCirculo(radio) {
    if (!radio) {
        addAnswer(boxAreaCirculo, 'Introduce un radio.');

        return;
    }

    alert('El área de un círculo con ' + radio + ' de radio es ' + Math.PI * Math.pow(radio, 2) + '.\n'
        + 'La longitud de la circunferencia es ' + Math.PI * 2 * radio + '.');
}

function calcularAleatorio(comienzo, fin) {
    if (!comienzo || !fin) {
        let errorMessage = '';

        if (!comienzo) {
            errorMessage += 'Introduce un número inicial.'
        }

        if (!fin) {
            if (errorMessage != '') {
                errorMessage += '\n';
            }

            errorMessage += 'Introduce un número final.'
        }

        addAnswer('boxAleatorio', errorMessage);

        return;
    }

    // Fix for weirdness
    comienzo = Math.ceil(comienzo);
    fin = Math.floor(fin);
    var randomNum = Math.floor(Math.random() * (fin - comienzo + 1) + comienzo);
    
    alert(`El número aleatorio generado es ${randomNum}.`);
}

function mitadCar(cadena) {
    if (!cadena) {
        addAnswer(boxCadena, 'Introduce una cadena.');

        return;
    }

    var output = `La mitad de la cadena sería '` + cadena.slice(0, cadena.length / 2) + `'`;

    if (cadena.length % 2 != 0) {
        output += `, siendo su longitud impar y con el caracter intermedio '` + cadena[cadena.length / 2 - 0.5] + `'`;
    }

    output += '.';

    if (cadena.length % 2 != 0) {

    }

    alert(output);
}

function ultimoCaracter(cadena) {
    if (!cadena) {
        addAnswer(boxCadena, 'Introduce una cadena.');

        return;
    }

    alert(`El último caracter de la cadena es '` + cadena[cadena.length - 1] + `'.`);
}

function cadenaInversa(cadena) {
    if (!cadena) {
        addAnswer(boxCadena, 'Introduce una cadena.');

        return;
    }

    var reversed = cadena.split('').reverse().join('');
    
    alert(`La cadena inversa sería: ${reversed}`);
}

function cadenaGuiones(cadena) {
    if (!cadena) {
        addAnswer(boxCadena, 'Introduce una cadena.');

        return;
    }
    
    let output = "";
    
    for (let i = 0; i < cadena.length; i++) {
        output += cadena[i];

        if (i < cadena.length - 1) {
            output += '-';
        }
    }
    
    alert(`La cadena separada con guiones sería: ${output}`);
}

function contarVocales(cadena) {
    if (!cadena) {
        addAnswer(boxCadena, 'Introduce una cadena.');

        return;
    }
    
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    
    let count = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            count++;
        }
    }
    
    alert(`La cadena contiene ${count} vocales.`);
}



/*
 * Listeners de submits
 */
document.getElementById('submitReyesMagos').addEventListener('click', function() {
    reyesMagos(document.getElementById('dateReyesMagos').value);
});

document.getElementById('submitDateTime').addEventListener('click', dateTime);

document.getElementById('submitAreaCirculo').addEventListener('click', function() {
    calcularAreaCirculo(document.getElementById('numberAreaCirculo').value);
});

document.getElementById('submitAleatorio').addEventListener('click', function() {
    calcularAleatorio(document.getElementById('numberAleatorio1').value, document.getElementById('numberAleatorio2').value);
});

/*
 * Listeners de submits de cadena
 */
document.getElementById('submitUltimoCaracter').addEventListener('click', function() {
    ultimoCaracter(document.getElementById('stringCadena').value);
});

document.getElementById('submitMitadCar').addEventListener('click', function() {
    mitadCar(document.getElementById('stringCadena').value);
});

document.getElementById('submitCadenaInversa').addEventListener('click', function() {
    cadenaInversa(document.getElementById('stringCadena').value);
});

document.getElementById('submitCadenaGuiones').addEventListener('click', function() {
    cadenaGuiones(document.getElementById('stringCadena').value);
});


document.getElementById('submitContarVocales').addEventListener('click', function() {
    contarVocales(document.getElementById('stringCadena').value);
});
