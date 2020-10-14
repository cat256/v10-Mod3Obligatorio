let n1;
let n2;
let operando;
let total;

const vaciar = (n) => {
    document.getElementById("pantalla").value = "";
    info.innerHTML = "Info sobre el número";
};

const rellenar_info = () => {
    let valor = document.getElementById("pantalla").value;
    let info = document.getElementById("info");
    if (valor < 100) info.innerHTML = "Info: El resultado es menor que 100";
    else if (valor >= 100 && valor <= 200)
        info.innerHTML = "Info: El resultado está entre 100 y 200";
    else info.innerHTML = "Info: El resultado es superior a 200";
};

const cuadrado = () => {
    if (validar("numbers")) {
        let num = document.getElementById("pantalla");
        let valor = +num.value;
        num.value = valor * valor;
        rellenar_info();
    }
};

const mod = () => {
    if (validar("numbers")) {
        let num = document.getElementById("pantalla");
        num.value = Math.abs(+num.value);
        rellenar_info();
    }
};

const fact = () => {
    if (validar("numbers")) {
        let num = document.getElementById("pantalla");
        let valor = +document.getElementById("pantalla").value;
        let resultado = 1;
        if (valor === 0) num.value = 1;
        else {
            for (let i = valor; i >= 1; i--) {
                resultado = resultado * i;
            }
            num.value = resultado;
        }
        rellenar_info();
    }
};

const mul = () => {
    let num = document.getElementById("pantalla");
    if (validar("numbers")) {
        n1 = +num.value;
        operando = "*";
    }
};

const add = () => {
    let num = document.getElementById("pantalla");
    if (validar("numbers")) {
        n1 = +num.value;
        operando = "+";
    }
};

const eq = () => {
    let num = document.getElementById("pantalla");
    n2 = +num.value;
    if (validar("numbers")) {
        if (operando === "*"){
            total = n1 * n2;
            num.value = total;
        }
        else if (operando === "+") {
            total = n1 + n2;
            num.value = total;
        }
        else num.value = "";
        operando = undefined;
        rellenar_info();
    }
};

const sumatorio = () => {
    let num = document.getElementById("pantalla");
    if (validar("arrays")) {
        let list = num.value.split(",").map(Number);
        let n = 0,
            acu = 0;
        while (n < list.length) {
            acu += list[n++];
        }
        num.value = acu;
        rellenar_info();
    }
};

const ordenar = () => {
    let num = document.getElementById("pantalla");
    if (validar("arrays")) {
        let list = num.value.split(",").map(Number);
        num.value = list.sort(sortCallback);
    }
};

const revertir = () => {
    let num = document.getElementById("pantalla");
    if (validar("arrays")) {
        let list = num.value.split(",").map(Number);
        num.value = list.reverse();
    }
};

const quitar = () => {
    let num = document.getElementById("pantalla");
    if (validar("arrays")) {
        let list = num.value.split(",").map(Number);
        list.pop();
        num.value = list;
    }
};

const sortCallback = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
};

const validar = (opcion) => {
    let num = document.getElementById("pantalla");
    if (opcion === "arrays") {
        let valor = num.value;
        let comprobar = /^\d+(\.\d{1,2})?(,\d+(\.\d{1,2})?)+$/.test(valor); //soloacepta números, la coma separacion de valores y el punto para los decimales
        if (comprobar) return true;
        else {
            document.getElementById("pantalla").value = "Error";
            return false;
        }   
    }
    else if(opcion === "numbers"){
        let valor = +num.value;
        if (num.value == null || num.value.length == 0 || isNaN(valor)) {
            document.getElementById("pantalla").value = "Error";
            return false;
        } else return true;
    }
};