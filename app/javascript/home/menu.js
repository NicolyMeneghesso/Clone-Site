document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        item.addEventListener('show.bs.dropdown', () => {
            item.classList.add('show');
        });

        item.addEventListener('hide.bs.dropdown', () => {
            item.classList.remove('show');
        });
    });
    
    const overlay = document.querySelector('.body-overlay');

    document.querySelectorAll('.dropdown').forEach(item => {
        // Mostra o fundo quando qualquer dropdown é aberto
        item.addEventListener('show.bs.dropdown', () => {
            overlay.classList.add('active');
        });

        // Verifica se ainda há dropdowns abertos antes de remover o fundo
        item.addEventListener('hide.bs.dropdown', () => {
            setTimeout(() => {
                const anyOpenDropdown = document.querySelector('.dropdown-menu.show');
                if (!anyOpenDropdown) {
                    overlay.classList.remove('active');
                }
            }, 200); // Tempo para permitir a abertura de outro dropdown
        });
    });
});