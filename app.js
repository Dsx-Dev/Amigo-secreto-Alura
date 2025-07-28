// Declarar el array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar amigos (debe coincidir con onclick="agregarAmigo()" en el HTML)
function agregarAmigo() {
    // Capturar el valor del campo de entrada (id="amigo" en el HTML)
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    limpiarResultado();
}

// Función para actualizar la lista visual (id="listaAmigos" en el HTML)
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el arreglo y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(elementoLista);
    }
}

// Función para sortear un amigo (debe coincidir con onclick="sortearAmigo()" en el HTML)
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Por favor, añade al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado (id="resultado" en el HTML)
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// Función auxiliar para limpiar el resultado
function limpiarResultado() {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';
}

// Opcional: Permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

