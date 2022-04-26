let inicio = prompt("Ingresar comida");
const equipo = [];
while (inicio != 'salir') {
    equipo.push(inicio);
    inicio = prompt("Ingresar comida");
}
for (let i = 0; i < equipo.length; i+=1) {
    alert(`Se encuentra en la posición ${i} el jugador ${equipo[i]}`);
}