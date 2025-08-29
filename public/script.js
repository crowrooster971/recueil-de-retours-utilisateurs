document.getElementById('retourForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:5000/retours', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Retour soumis avec succès!');
        event.target.reset();
    } else {
        alert('Erreur lors de la soumission du retour.');
    }
});