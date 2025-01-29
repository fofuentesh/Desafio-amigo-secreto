// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre al array si no está vacío
    amigos.push(nombre);
    
    // Limpiar el input
    input.value = "";

    // Actualizar la lista visualmente
    actualizarLista();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}
