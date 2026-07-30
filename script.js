document.addEventListener("DOMContentLoaded", () => {
    
    // Botão para mostrar/esconder a curiosidade histórica
    const btnCuriosidade = document.getElementById('btn-curiosidade');
    const curiosidadeTexto = document.getElementById('curiosidade-texto');

    if (btnCuriosidade && curiosidadeTexto) {
        btnCuriosidade.addEventListener('click', () => {
            curiosidadeTexto.classList.toggle('active');

            if (curiosidadeTexto.classList.contains('active')) {
                btnCuriosidade.textContent = 'Ocultar Curiosidade';
            } else {
                btnCuriosidade.textContent = 'Ver Curiosidade Histórica';
            }
        });
    }

    // Efeito suave de rolagem para os links da barra de navegação
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
