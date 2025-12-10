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
    const visualizationsCards = document.querySelectorAll('.visualizations-card');
    const webappsCards = document.querySelectorAll('.webapps-card');
    const galleryCards = document.querySelectorAll('.gallery-card');

    // Title mapping
    const titles = {
        'selected-works': 'Selected Works',
        'gallery': 'Gallery',
        'visualizations': 'Visualizations',
        'webapps': 'Web Apps'
    };

    // Function to get current view from URL hash
    function getViewFromHash() {
        const hash = window.location.hash.slice(1); // Remove #
        return hash || 'selected-works'; // Default to selected-works
    }

    // Function to switch view
    function switchView(view) {
        // Update active button
        toggleButtons.forEach(btn => {
            if (btn.getAttribute('data-view') === view) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update section title
        if (sectionTitle && titles[view]) {
            sectionTitle.textContent = titles[view];
        }

        // Hide all cards first
        selectedWorksCards.forEach(card => card.style.display = 'none');
        visualizationsCards.forEach(card => card.style.display = 'none');
        webappsCards.forEach(card => card.style.display = 'none');
        galleryCards.forEach(card => card.style.display = 'none');
        if (galleryWelcome) galleryWelcome.style.display = 'none';
        if (visualizationsWelcome) visualizationsWelcome.style.display = 'none';
        if (webappsWelcome) webappsWelcome.style.display = 'none';

        // Show appropriate cards and apply grid layout
        if (view === 'selected-works') {
            // Remove gallery-view class to show sidebar for Selected Works
            projectsLayout.classList.remove('gallery-view');
            projectGrid.classList.remove('bento-grid');
            selectedWorksCards.forEach(card => card.style.display = 'block');
        } else if (view === 'gallery') {
            projectsLayout.classList.add('gallery-view');
            projectGrid.classList.add('bento-grid');
            if (galleryWelcome) galleryWelcome.style.display = 'flex';
            galleryCards.forEach(card => card.style.display = 'block');
        } else if (view === 'visualizations') {
            projectsLayout.classList.add('gallery-view');
            projectGrid.classList.add('bento-grid');
            if (visualizationsWelcome) visualizationsWelcome.style.display = 'flex';
            visualizationsCards.forEach(card => card.style.display = 'block');
        } else if (view === 'webapps') {
            projectsLayout.classList.add('gallery-view');
            projectGrid.classList.add('bento-grid');
            if (webappsWelcome) webappsWelcome.style.display = 'flex';
            webappsCards.forEach(card => card.style.display = 'block');
        }

        // Update URL hash without triggering scroll
        if (window.location.hash !== '#' + view) {
            history.replaceState(null, null, '#' + view);
        }
    }

    // Handle toggle button clicks
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const view = this.getAttribute('data-view');
            switchView(view);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const view = getViewFromHash();
        switchView(view);
    });

    // Initialize view on page load
    const initialView = getViewFromHash();
    switchView(initialView);
});
