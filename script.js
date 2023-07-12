/* CONVERSOR DE BASES */
/* CONVERTER DE DECIMAL*/
function convert_decimal() {
    var decimal = parseInt(document.getElementById('ipt_decimal').value, 10)
    document.getElementById("ipt_binario").value = decimal.toString(2);
    document.getElementById("ipt_octal").value = decimal.toString(8);
    document.getElementById("ipt_hexadecimal").value = decimal.toString(16);

}

/*CONVERTER A PARTIR DE BINÁRIO*/

function convert_binario() {
    var binario = parseInt(document.getElementById('ipt_binario').value, 10)
    document.getElementById("ipt_decimal").value = parseInt(binario, 2);
    document.getElementById("ipt_octal").value = parseInt(binario, 2).toString(8);
    document.getElementById("ipt_hexadecimal").value = parseInt(binario, 2).toString(16);

}

/* CONVERSÃO PARA NÚMERO OCTAL*/

function convert_octal() {
    var octal = parseInt(document.getElementById('ipt_octal').value, 10)
    document.getElementById("ipt_decimal").value = parseInt(octal, 8);
    document.getElementById("ipt_binario").value = parseInt(octal, 8).toString(2);
    document.getElementById("ipt_hexadecimal").value = parseInt(octal, 8).toString(16);

}

function convert_hexadecimal() {
    var hexadecimal = document.getElementById("ipt_hexadecimal").value
    document.getElementById("ipt_decimal").value = parseInt(hexadecimal, 16);
    document.getElementById("ipt_binario").value = parseInt(hexadecimal, 16).toString(2);
    document.getElementById("ipt_octal").value = parseInt(hexadecimal, 16).toString(8);

}


/***INICIO - CONDIÇÕES PARA HABILITAR OS INPUTS DE INSERSÃO */

function habi_desabi(value) {

    if (value == 10) {
        ipt_decimal.disabled = false;
    } else if (value != 10) {
        ipt_decimal.disabled = true;
    }

    /* Se a seleção for igual a binário */
    if (value == 2) {
        ipt_binario.disabled = false;
    } else if (value != 2) {
        ipt_binario.disabled = true;
    }

    /* Se a seleção for octal */
    if (value == 8) {
        ipt_octal.disabled = false;
    } else if (value != 8) {
        ipt_octal.disabled = true;
    }

    /* Se a seleção for hexadecimal */
    if (value == 16) {
        ipt_hexadecimal.disabled = false;
    } else if (value != 16) {
        ipt_hexadecimal.disabled = true;
    }
};



function chamar_calculo() {

    /* se a função for igual a decimal, o butão irá execultar a função convert_decimal()*/
    if (tipos_bases.value == 10) {
        convert_decimal();
    }

    if (tipos_bases.value == 2) {
        convert_binario();
    }

    if (tipos_bases.value == 8) {
        convert_octal();
    }

    if (tipos_bases.value == 16) {
        convert_hexadecimal();
    }
};



/* incio -- determinado cada tipo de input*/
function type_binario(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla == 48 || tecla == 49)) return true;
    else {
        return false;
    }
}

/*função do tipo decimal a ser dado:0123456789 de acordo com o keyCode*/
function type_decimal(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla >= 48 && tecla <= 57)) return true;
    else {
        return false;
    }

}

/*função tipo octal a ser dado de acordo com o keyCode*/
function type_octal(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla >= 48 || tecla <= 55)) return true;
    else {
        return false;

    }
}

/*função tipo hexadecimal a ser dado de acordo com keyCode*/
function type_hexadecimal(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla >= 48 && tecla <= 57 || tecla >= 65 && tecla <= 70 || tecla >= 97 && tecla <= 102)) return true;
    else {
        return false;

    }

}


