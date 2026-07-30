document.addEventListener("DOMContentLoaded", () => {
    
    // Rolagem suave para os links do menu
    const navLinks = document.querySelectorAll('.nav-links a, .btn-primary');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
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

    // Efeito sutil ao passar o cursor nas imagens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = '#ff0033';
        });
        item.addEventListener('mouseleave', () => {
            item.style.borderColor = '#330033';
        });
    });

});
