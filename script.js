/* ==================================================
   TIVOR - HORIZONTAL SCROLL SCRIPT
   ================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const scrollContainer = document.getElementById('scrollContainer');
    const progressBar = document.getElementById('progressBar');
    const panels = document.querySelectorAll('.panel');

    // Mapeamento Scroll Vertical -> Scroll Horizontal
    scrollContainer.addEventListener('wheel', (evt) => {
        // Ignora se estiver num elemento com scroll interno
        if (evt.target.closest('.scrollable-internal')) return;

        evt.preventDefault();
        // Converte deltaY (cima/baixo) em scrollLeft (esq/dir)
        scrollContainer.scrollLeft += evt.deltaY;
    }, { passive: false });


    // Teclado (setas) já funciona nativamente em overflow-x,
    // mas forçar a barra de progresso a atualizar

    // Atualiza Barra de Progresso
    scrollContainer.addEventListener('scroll', () => {
        const totalScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;

        if (totalScroll > 0) {
            const progress = (currentScroll / totalScroll) * 100;
            progressBar.style.width = `${progress}%`;
        }
    });

    // Intersection Observer para Animações
    // Como é horizontal, precisamos observar a div quando ela cruza o painel

    const observerOptions = {
        root: scrollContainer,
        rootMargin: '0px',
        threshold: 0.3 // 30% do painel visível dispara a animação
    };

    const panelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que engatilha as keyframes do CSS
                entry.target.classList.add('is-visible');

                // Optcional: Parar de observar depois de exibir (One-time animation)
                // panelObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    panels.forEach(panel => {
        panelObserver.observe(panel);
    });

    // Dispara observador manualmente para o primeiro painel no load
    setTimeout(() => {
        if (panels[0]) {
            panels[0].classList.add('is-visible');
        }
    }, 100);

});
