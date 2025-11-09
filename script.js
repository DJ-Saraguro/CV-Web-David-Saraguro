// Archivo script.js

// 1. FUNCIÓN PARA MOSTRAR/OCULTAR SECCIONES (ACORDEÓN)


function setupSectionToggles() {
    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const icon = title.querySelector('.toggle-icon');

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotated');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotated');
            }
        });
    });
}


// 2. FUNCIÓN PARA EL MODO OSCURO

function addDarkModeButton() {
    const button = document.createElement('button');
    button.textContent = 'Modo Oscuro: OFF';
    button.id = 'darkModeToggle';
    button.classList.add('dark-mode-btn');

    // Estilos básicos para el botón
    const style = document.createElement('style');
    style.textContent = `
        .dark-mode-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 15px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            background-color: var(--color-primario);
            color: white;
            z-index: 1000;
            transition: background-color 0.3s;
        }
        .dark-mode-btn:hover {
            background-color: #005f99;
        }
    `;
    document.head.appendChild(style);
    document.body.prepend(button);

    return button;
}

function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    button.textContent = isDarkMode ? 'Modo Oscuro: ON' : 'Modo Oscuro: OFF';
    
    localStorage.setItem('darkModePreference', isDarkMode ? 'on' : 'off');
}

function loadDarkModePreference() {

    
    const savedPreference = localStorage.getItem('darkModePreference');
    const body = document.body;
    const button = document.getElementById('darkModeToggle');

    // Estilos del Modo Oscuro
    const darkStyles = `
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }

        body.dark-mode header {
            background-color: #004d7a;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
        }

        body.dark-mode .cv-section {
            background-color: #1e1e1e;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        }

        body.dark-mode .section-title {
            background-color: #1e1e1e;
            color: #79c5f8;
            border-bottom-color: #333;
        }

        body.dark-mode .section-title:hover {
            background-color: #2a2a2a;
        }
        
        body.dark-mode .academic-item h3, 
        body.dark-mode .experience-item h3 {
            color: #90caf9;
        }

        body.dark-mode .institution, 
        body.dark-mode .dates {
            color: #a0a0a0;
        }

        body.dark-mode .achievements li::before {
            color: #90caf9;
        }

        body.dark-mode footer {
            background-color: #000;
        }
        
        body.dark-mode .skill-item {
            color: var(--color-texto-claro);
            background-color: #2a2a2a; 
        }
        
        body.dark-mode .skill-item:hover {
            color: var(--color-texto-claro); 
        }


        body.dark-mode footer {
            background-color: #000;
        }
    `;

    const darkStyleTag = document.createElement('style');
    darkStyleTag.id = 'dark-mode-styles';
    darkStyleTag.textContent = darkStyles;
    document.head.appendChild(darkStyleTag);


    if (savedPreference === 'on') {
        body.classList.add('dark-mode');
        button.textContent = 'Modo Oscuro: ON';
    }
}

// 3. INICIALIZACIÓN DEL CV


document.addEventListener('DOMContentLoaded', () => {
    setupSectionToggles();

    const darkModeButton = addDarkModeButton();

    loadDarkModePreference();

    darkModeButton.addEventListener('click', toggleDarkMode);

    console.log("CV interactivo cargado. ¡Listo para la interacción!");
});