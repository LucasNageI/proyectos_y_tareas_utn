/* LOGIN */

function verificarEmail (email) {
    return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

function verificarPassword (password){
    return password.toLowerCase() === password || password.length <= 6
}

function obtenerDatos (data) {
    let dato = prompt(data.mensaje)
    while(data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}

const DATOS = {
    EMAIL:{
        mensaje: "ingrese su email",
        error: "el email no es valido, intente nuevamente",
        validacion: verificarEmail
    },
    PASSWORD:{
        mensaje: "cree contraseña, debe tener por lo menos 6 caracteres y una mayuscula",
        error: "la contraseña no es valida, intente nuevamente",
        validacion: verificarPassword
    }
}

const login = `
    email: ${obtenerDatos(DATOS.EMAIL)}
    password: ${obtenerDatos(DATOS.PASSWORD)}
`

console.log(login)

/* CALCULADORA */

let operacion_ingresada = prompt("ingrese la operacion que desea realizar (+ o -)")

function verificarOperacion (operacion) {
    return operacion === "+" || operacion === "-"
}

while (verificarOperacion(operacion_ingresada) === false){
    operacion_ingresada = prompt("la operacion ingresada no es una suma o una resta")
    verificarOperacion(operacion_ingresada)
}

let numero_a = parseFloat(prompt("ingrese el primer numero"))
let numero_b = parseFloat(prompt("ingrese el segundo numero"))

function validarNumeros (numeroA, numeroB) {
    return isNaN(numeroA) || isNaN(numeroB)
}

while (validarNumeros(numero_a, numero_b) === true) {
    numero_a = parseFloat(prompt("los valores ingresados no son numeros, ingrese el primer numero"))
    numero_b = parseFloat(prompt("ingrese el segundo numero"))
    validarNumeros(numero_a, numero_b)
}

let resultado_operacion = 0

if (operacion_ingresada === "+") {
    resultado_operacion = numero_a + numero_b
    alert("la suma de " + numero_a + " + " + numero_b + " es igual a " + resultado_operacion)
}
else{
    resultado_operacion = numero_a - numero_b
    alert("la resta de " + numero_a + " - " + numero_b + " es igual a " + resultado_operacion)
}

/* HISTORIAL */

const historial = []

const ultima_accion = {
    operacion: operacion_ingresada,
    a: numero_a,
    b: numero_b,
    resultado: resultado_operacion
}

function agregarAlHistorial (elementoHistorial) {
    historial.push(JSON.stringify(elementoHistorial))
    localStorage.setItem("historial: ", historial)
}

console.log(agregarAlHistorial(ultima_accion))

/* en esta funcion, estoy creando una variable donde se va a almacenar el historial como string, luego, uso un forof para que por cada item(objeto) del array, se muestre el valor de la accion, operacion, numero a, numero b y resultado. Para esto se usan los template strings, y la interpolacion de las keys de los objetos */

/* function renderizarHistorial (historial) { 
    let historial_en_string = ""
    for (const objeto of historial) {
        historial_en_string = historial_en_string + `
        accion: ${objeto.accion}
        operacion: ${objeto.operacion}
        a: ${objeto.a}
        b: ${objeto.b}
        resultado: ${objeto.resultado}
        `
    }
    return historial_en_string
} */

const historial_en_string = JSON.stringify(historial)

/* esta es una funcion que convierte un array a string mediante el uso de template strings y interpolaciones */

alert(historial_en_string)

function obtenerHIstorial () {
    let historial_desde_localStorage = localStorage.getItem("historial")
    return JSON.stringify([historial_desde_localStorage])
}

console.log(obtenerHIstorial())