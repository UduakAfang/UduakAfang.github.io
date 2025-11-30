document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const projectsLayout = document.querySelector('.projects-layout');
    const projectGrid = document.querySelector('.project-grid');
    const galleryWelcome = document.querySelector('.gallery-welcome');
    const emptyCards = document.querySelectorAll('.empty-card');
    const dashboardCards = document.querySelectorAll('.project-card:not(.empty-card)');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const view = this.getAttribute('data-view');

            // Update active button
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Toggle views
            if (view === 'gallery') {
                projectsLayout.classList.add('gallery-view');
                projectGrid.classList.add('bento-grid');

                // Show gallery cards, hide dashboard cards
                if (galleryWelcome) galleryWelcome.style.display = 'flex';
                emptyCards.forEach(card => card.style.display = 'block');
                dashboardCards.forEach(card => card.style.display = 'none');
            } else {
                projectsLayout.classList.remove('gallery-view');
                projectGrid.classList.remove('bento-grid');

                // Show dashboard cards, hide gallery cards
                if (galleryWelcome) galleryWelcome.style.display = 'none';
                emptyCards.forEach(card => card.style.display = 'none');
                dashboardCards.forEach(card => card.style.display = 'block');
            }
        });
    });
});
