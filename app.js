//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function addFriend() {
    const inputAmigo = document.getElementById('friendName');
    const nombreAmigo = inputAmigo.value.trim();

    // Validación del nombre
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar el amigo al array
    amigos.push(nombreAmigo);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la lista visual
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('friendsList');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function drawFriend() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para realizar el sorteo.');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const elementoResultado = document.getElementById('result');
    elementoResultado.innerHTML = `
        <p>¡Tu amigo secreto es:</p>
        <h3>${amigoSeleccionado}</h3>
    `;
}
