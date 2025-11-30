document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const projectsLayout = document.querySelector('.projects-layout');
    const projectGrid = document.querySelector('.project-grid');

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
            } else {
                projectsLayout.classList.remove('gallery-view');
                projectGrid.classList.remove('bento-grid');
            }
        });
    });
});
