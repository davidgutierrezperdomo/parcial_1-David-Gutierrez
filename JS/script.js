let contador

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

let nombre = document.getElementById("nombre").value
let correo = document.getElementById("correo").value
let apellido = document.getElementById("apellido").value
let telefono = document.getElementById("telefono").value


const formulario = document.getElementById('formulario'); 

formulario.addEventListener('registrar', function(event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value; 
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

    if (!regexNombre.test(nombre)) {
        alert("no es valido");
        return; 
    }
    alert(`su nombre es correcto`);
});

formulario.addEventListener('registrar', function(event) {
    event.preventDefault(); 
    
    const apellido = document.getElementById('apellido').value; 
    const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

    if (!regexApellido.test(apellido)) {
        alert("no es valido");
        return; 
    }
    alert(`su apellido es correcto`);
});


formulario.addEventListener('registrar', function(event) {
    event.preventDefault(); 
    
    const telefono = document.getElementById('telefono').value; 
    const regexTelefono = /^\d{10}$/

    if (!regexTelefono.test(telefono)) {
        alert("no es valido");
        return; 
    }
    alert(`su telefono es correcto`);
});


formulario.addEventListener('registrar', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('correo').value; 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("no es valido");
        return; 
    }

    alert(`correcto`);
});

}
document.getElementById("modo").addEventListener('click', function() {

    document.body.classList.toggle("dark")

})

// activar modo en body
botonOscuro.addEventListener('click', () => {
    document.body.classList.add('dark');
});

// revertir
botonOScuro.addEventListener('click', () => {
    document.body.classList.remove('dark');
});

