document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. Verificar a preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver preferência salva, verifica a preferência do sistema
        body.classList.add('dark-mode');
    }

    // 2. Adicionar o listener para o botão de alternância
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // Mudar para claro
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
            } else {
                // Mudar para escuro
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }

    // Você pode adicionar aqui o código para o filtro de personalidades na página 'personalidades.html'
    // Ex: const filterButtons = document.querySelectorAll('.filter-btn');
    // filterButtons.forEach(button => { /* ... lógica do filtro ... */ });
});
