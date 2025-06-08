document.addEventListener('DOMContentLoaded', function () {
    const activeTab = localStorage.getItem('activeTab');
    const activeContent = localStorage.getItem('activeContent');

    if (activeTab) {
        document.querySelector('.nav-link.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active', 'show');

        document.querySelector(`[data-bs-target="${activeTab}"]`).classList.add('active');
        document.querySelector(activeTab).classList.add('active', 'show');
    }

    if (activeContent) {
        showContent(activeContent);
    }

    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('click', function () {
            localStorage.setItem('activeTab', this.getAttribute('data-bs-target'));
        });
    });
});

function showContent(contentPath) {
    localStorage.setItem('activeContent', contentPath);

    fetch(`tutorials/${contentPath}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('content-area').innerHTML = '<p>Sisu ei leitud.</p>';
        });
}