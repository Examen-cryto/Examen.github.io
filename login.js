// Script para redirigir al estudiante a la página de los exámenes
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const grado = document.getElementById('grado').value.trim();
    
    if (nombre === '' || grado === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        // Almacenar los datos en localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('grado', grado);

        // Redirigir al estudiante a la página de los exámenes
        window.location.href = 'index.html';
    }
});
