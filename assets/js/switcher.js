document.addEventListener('DOMContentLoaded', function () {
    // Create the switcher container
    const switcherContainer = document.createElement('div');
    switcherContainer.id = 'design-switcher';

    // Create the select element
    const select = document.createElement('select');
    select.id = 'design-select';

    // Define the designs
    const designs = [
        { name: '1. Executive Dashboard', file: 'index.html' },
        { name: '2. Minimalist Storyteller', file: 'design2.html' },
        { name: '3. Corporate Pro', file: 'design3.html' },
        { name: '4. Interactive Resume', file: 'design4.html' },
        { name: '5. Case Study (Magazine)', file: 'design5.html' },
        { name: '6. Tech Terminal', file: 'design6.html' },
        { name: '7. Modern SaaS', file: 'design7.html' },
        { name: '8. Data Grid', file: 'design8.html' },
        { name: '9. Analyst Notebook', file: 'design9.html' },
        { name: '10. The Futurist', file: 'design10.html' }
    ];

    // Populate options
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    designs.forEach(design => {
        const option = document.createElement('option');
        option.value = design.file;
        option.textContent = design.name;
        if (design.file === currentFile) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    // Handle change
    select.addEventListener('change', function () {
        window.location.href = this.value;
    });

    // Inject CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/switcher.css';
    document.head.appendChild(link);

    // Append to body
    switcherContainer.appendChild(select);
    document.body.appendChild(switcherContainer);
});
