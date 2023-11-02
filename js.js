document.getElementById('estado').addEventListener('change', function() {
    var estadoSeleccionado = document.getElementById('estado').value;
    var estadoSeleccionadoElement = document.getElementById('estadoSeleccionado');
    estadoSeleccionadoElement.textContent = 'Estado del archivo: ' + estadoSeleccionado;
    console.log('Estado seleccionado:', estadoSeleccionado);
});
