document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    fetch('../api/insertar/insertar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password })
    })
    

    const data =  response.text();
    document.getElementById('mensaje').innerText = data;
});