document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const projectsLayout = document.querySelector('.projects-layout');
    const projectGrid = document.querySelector('.project-grid');
    const sectionTitle = document.querySelector('.section-title');

    // Get all card types
    const selectedWorksCards = document.querySelectorAll('.selected-works-card');
    const galleryWelcome = document.querySelector('.gallery-welcome');
    const galleryCards = document.querySelectorAll('.gallery-card');
    const visualizationsCards = document.querySelectorAll('.visualizations-card');
    const webappsCards = document.querySelectorAll('.webapps-card');

    // Title mapping
    const titles = {
        'selected-works': 'Selected Works',
        'gallery': 'Gallery',
        'visualizations': 'Visualizations',
        'webapps': 'Web Apps'
    };

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const view = this.getAttribute('data-view');

            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update section title
            if (sectionTitle && titles[view]) {
                sectionTitle.textContent = titles[view];
            }

            // Hide all cards first
            selectedWorksCards.forEach(card => card.style.display = 'none');
            if (galleryWelcome) galleryWelcome.style.display = 'none';
            galleryCards.forEach(card => card.style.display = 'none');
            visualizationsCards.forEach(card => card.style.display = 'none');
            webappsCards.forEach(card => card.style.display = 'none');

            // Show appropriate cards and apply grid layout
            if (view === 'selected-works') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                selectedWorksCards.forEach(card => card.style.display = 'block');
            } else if (view === 'gallery') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                if (galleryWelcome) galleryWelcome.style.display = 'flex';
                galleryCards.forEach(card => card.style.display = 'block');
            } else if (view === 'visualizations') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                visualizationsCards.forEach(card => card.style.display = 'block');
            } else if (view === 'webapps') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                webappsCards.forEach(card => card.style.display = 'block');
            }
        });
    });
});
