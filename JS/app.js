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
    console.log("3: Salir de la cuenta")
    console.log("------------------------")
    
    let opc = prompt("Ingresar Opcion")
    switch(opc){
        case "1":
            let cantidad = Number(prompt("Cantidad pedida"))
            montoPedido(cantidad)
            break;
        case "2": 
            consultarSaldoCuenta()
            break;
        case "3": 
            salir();
            break;
        default:
            console.log("Peticion Incorrecta")
            break;
    }
}

function montoPedido(plata) {
    if(plata > 10000){
        alert("Se ha exedido del monto maximo que se puede solicitar")
    } else {
        alert("retiraste " + plata + " pesos")
    }
    seleccionarCredito()
}

function consultarSaldoCuenta() {
    alert("Actualmente tiene ingresados " + cantidadPlata + " pesos")
    seleccionarCredito()
}

function salir() {
    alert("Usted ha finalizado sus operacion bancarias")
    seleccionarCredito()
}