// Project loader - reads info.txt files and displays projects

const projectConfig = {
    'selected-works': {
        count: 4,
        prefix: 'project'
    },
    'visualizations': {
        count: 6,
        prefix: 'viz'
    },
    'webapps': {
        count: 6,
        prefix: 'webapp'
    },
    'gallery': {
        count: 6,
        prefix: 'item'
    }
};

// Parse info.txt content
function parseProjectInfo(text) {
    const lines = text.split('\n');
    const project = {};

    for (const line of lines) {
        // Skip comments and instructions
        if (line.startsWith('INSTRUCTIONS') || line.trim() === '' || /^\d+\./.test(line.trim())) {
            continue;
        }

        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim().toLowerCase();
            const value = line.substring(colonIndex + 1).trim();

            if (value && value !== 'Your Project Title Here' && !value.includes('(leave blank')) {
                project[key] = value;
            }
        }
    }

    return project;
}

// Load a single project
async function loadProject(category, index) {
    const config = projectConfig[category];
    const projectPath = `projects/${category}/${config.prefix}-${index}`;

    try {
        const response = await fetch(`${projectPath}/info.txt`);
        if (!response.ok) return null;

        const text = await response.text();
        const projectData = parseProjectInfo(text);

        // Check if project has actual content (not just template)
        if (!projectData.title || projectData.title.includes('Title Here')) {
            return null;
        }

        // Add image path
        projectData.thumbnail = `${projectPath}/images/thumbnail.jpg`;
        projectData.path = projectPath;
        projectData.category = category;

        return projectData;
    } catch (error) {
        console.log(`Project ${category}/${config.prefix}-${index} not configured yet`);
        return null;
    }
}

// Populate project card
function populateCard(card, project) {
    if (!project) return;

    // Update image
    const imageDiv = card.querySelector('.project-image');
    if (imageDiv && project.thumbnail) {
        imageDiv.style.backgroundImage = `url('${project.thumbnail}')`;
        imageDiv.style.backgroundSize = 'cover';
        imageDiv.style.backgroundPosition = 'center';
        imageDiv.textContent = ''; // Remove placeholder text
    }

    // Add click handler to show modal
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => showProjectModal(project));
}

// Show project details in modal
function showProjectModal(project) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Populate modal content
    document.getElementById('modal-title').textContent = project.title || 'Untitled Project';
    document.getElementById('modal-description').textContent = project.description || '';
    document.getElementById('modal-tech').textContent = project.tech || '';
    document.getElementById('modal-date').textContent = project.date || '';

    // Handle links
    const linkContainer = document.getElementById('modal-links');
    linkContainer.innerHTML = '';

    if (project.link) {
        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.className = 'modal-link';
        link.textContent = 'View Live Project';
        linkContainer.appendChild(link);
    }

    if (project.github) {
        const link = document.createElement('a');
        link.href = project.github;
        link.target = '_blank';
        link.className = 'modal-link';
        link.textContent = 'View on GitHub';
        linkContainer.appendChild(link);
    }

    // Show modal
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Load all projects for a category
async function loadCategoryProjects(category) {
    const config = projectConfig[category];
    const cards = document.querySelectorAll(`.${category.replace('-', '')}-card, .${category}-card`);

    for (let i = 0; i < config.count && i < cards.length; i++) {
        const project = await loadProject(category, i + 1);
        if (project) {
            populateCard(cards[i], project);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Load all categories
    await loadCategoryProjects('selected-works');
    await loadCategoryProjects('visualizations');
    await loadCategoryProjects('webapps');
    await loadCategoryProjects('gallery');
});
