let cantidadPlata = 0;

pedirCredito()

function pedirCredito(){
    let prestamo = confirm("Ingrese Usuario")
    ingresarUsuario(prestamo)
}

function ingresarUsuario(us){
    if(us){
        let usuario = prompt("Ingrese su usuario");
        validarUsuario(usuario)
    }else {
        alert("Es necesario ingresar el usuario")
    }
}

function validarUsuario(u){
    if(u === "coder"){
        seleccionarCredito()
    }else {
        alert("Usuario incorrecto")
    }
    ingresarUsuario()
}

function seleccionarCredito() {
    console.log("1: Pedir prestamo");
    console.log("2: Ver cuenta")
    console.log("3: Calcular total")
    console.log("4: Salir de la cuenta")
    console.log("------------------------")
    
    let opc = prompt("Ingresar Opcion")
    switch(opc){
        case "1":
            cantidadPlata = Number(prompt("Cantidad pedida"))
            montoPedido(cantidadPlata)
            break;
        case "2": 
            consultarSaldoCuenta()
            break;
        case "3": 
            calcularTotal();
            break;
        case "4":
            salir();
            break;
        default:
            console.log("Peticion Incorrecta")
            break;
    }
}

function montoPedido() {
    if(cantidadPlata > 10000){
        alert("Se ha exedido del monto maximo que se puede solicitar")
    } else {
        alert("retiraste " + cantidadPlata + " pesos")
    }
    seleccionarCredito()
}

function consultarSaldoCuenta() {
    alert("Actualmente tiene ingresados " + cantidadPlata + " pesos")
    seleccionarCredito()
}

function calcularTotal() {
    alert(`Su total a pagar será de ${cantidadPlata * 1.35}`)
}

function salir() {
    alert("Usted ha finalizado sus operacion bancarias")
    seleccionarCredito()
}

