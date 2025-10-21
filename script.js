// Adiciona efeitos interativos ao site
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de clique no botão
    const downloadButton = document.querySelector('.download-button');
    
    downloadButton.addEventListener('click', function(e) {
        // Adiciona efeito visual de clique
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Adiciona feedback visual
        this.style.background = 'linear-gradient(135deg, #128C7E, #0F7A6B)';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
        }, 200);
    });
    
    // Adiciona efeito de hover com som (opcional)
    downloadButton.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    
    // Adiciona animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const animatedElements = document.querySelectorAll('.profile-section, .links-section, .footer');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Adiciona confirmação antes de redirecionar (opcional)
    downloadButton.addEventListener('click', function(e) {
        // Pequeno delay para mostrar o efeito visual antes do redirecionamento
        setTimeout(() => {
            // O redirecionamento acontece automaticamente pelo href do link
        }, 100);
    });
});

// Função para detectar se é mobile e ajustar comportamento
function isMobile() {
    return window.innerWidth <= 768;
}

// Adiciona classe mobile ao body se necessário
if (isMobile()) {
    document.body.classList.add('mobile');
}

// Adiciona efeito de parallax sutil no fundo
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.backgroundPosition = `center ${speed}px`;
    }
});
