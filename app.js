// Lista amigos
let amigos = [];

// Agregar amigos
function agregarAmigo (){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === ''){
        alert("El campo esta vacio, por favor ingresa un nombre.");
        return;
        } else if (amigos.includes(nombre)){
            alert('El nombre que ingresaste ya esta en la lista, por favor ingrese uno diferente.')
            limpiarEntrada();
                } else {
                    amigos.push(nombre);
                    mostrarListaAmigos(); // Actualiza la lista
                    limpiarEntrada(); // Limpia el campo
                    }
}

function mostrarListaAmigos(){
    const lista =  document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let i=0; i < amigos.length; i++ ){
        const li = document.createElement("li");
        li.textContent = amigos[i]
        lista.appendChild(li);
    }
}

function limpiarEntrada() {
    document.getElementById('amigo').value = ''; //limpia el campo
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Ingresa al menos un elemento a la lista para realizar el sorteo');
        return;
    }
    const listado =  Math.floor(Math.random()*amigos.length);
    const ganador = amigos[listado];

    const resultadoFinal =  document.getElementById("resultado");
    resultadoFinal.innerHTML = '';

    const li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + ganador;
    resultadoFinal.appendChild(li);
    limpiarEntrada();
}
