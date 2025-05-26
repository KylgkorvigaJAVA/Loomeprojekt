function showContent(filename) {
    fetch(`tutorials/${filename}.html`)
        .then(response => {
            if (!response.ok) throw new Error('Faili ei leitud');
            return response.text();
        })
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('content-area').innerHTML = '<p>Sisu ei leitud.</p>';
            console.error(error);
        });
}