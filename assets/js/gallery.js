document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const projectsLayout = document.querySelector('.projects-layout');
    const projectGrid = document.querySelector('.project-grid');
    const sectionTitle = document.querySelector('.section-title');

    // Get all card types
    const selectedWorksCards = document.querySelectorAll('.selected-works-card');
    const galleryWelcome = document.querySelector('.gallery-welcome');
    const visualizationsWelcome = document.querySelector('.visualizations-welcome');
    const webappsWelcome = document.querySelector('.webapps-welcome');

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
            if (visualizationsWelcome) visualizationsWelcome.style.display = 'none';
            if (webappsWelcome) webappsWelcome.style.display = 'none';

            // Show appropriate cards and apply grid layout
            if (view === 'selected-works') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                selectedWorksCards.forEach(card => card.style.display = 'block');
            } else if (view === 'gallery') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                if (galleryWelcome) galleryWelcome.style.display = 'flex';
            } else if (view === 'visualizations') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                if (visualizationsWelcome) visualizationsWelcome.style.display = 'flex';
            } else if (view === 'webapps') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');
                if (webappsWelcome) webappsWelcome.style.display = 'flex';
            }
        });
    });
});
