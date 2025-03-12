document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.form-register');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            console.log('Formulario enviado'); // Depuración

            // Obtén los valores del formulario
            const userName = document.querySelector('input[name="userName"]').value;
            const userEmail = document.querySelector('input[name="userEmail"]').value;
            const userPassword = document.querySelector('input[name="userPassword"]').value;

            console.log('Datos del formulario:', { userName, userEmail, userPassword }); // Depuración

            // Valida que los campos no estén vacíos
            if (!userName || !userEmail || !userPassword) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Envía los datos al servidor
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, userEmail, userPassword }),
            })
            .then(response => {
                if (response.ok) {
                    console.log('Registro exitoso'); // Depuración
                    window.location.href = '/views/success.html'; // Redirige manualmente
                } else {
                    console.error('Error en el registro'); // Depuración
                    alert('Error al registrar usuario');
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
        });
    }
});
