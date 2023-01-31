
//Cambiar y restablecer fondo
document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = '#AED6F1';
})
document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = '#EBF5FB';
})

//Ocultar o mostrar el texto
document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById("curriculum").style.display='none';
})
document.getElementById('boton_mostrar').addEventListener('click', function() {
    document.getElementById("curriculum").style.display='block';
})
