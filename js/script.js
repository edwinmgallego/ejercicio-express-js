document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    const data = { name, age, email };

    try {
        const response = await fetch('http://localhost:3000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();

            // Mostrar los datos en el HTML
            const output = document.getElementById('output');
            output.innerHTML = `
                <h2>Datos Recibidos:</h2>
                <p><strong>Nombre:</strong> ${responseData.name}</p>
                <p><strong>Edad:</strong> ${responseData.age}</p>
                <p><strong>Correo:</strong> ${responseData.email}</p>
            `;
            alert('Formulario enviado correctamente');
        } else {
            alert('Error al enviar el formulario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al conectar con el servidor');
    }
});
