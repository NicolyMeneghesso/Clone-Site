document.querySelectorAll('.nav-item.dropdown').forEach(item => {
    item.addEventListener('show.bs.dropdown', () => {
        item.classList.add('show');
    });

    item.addEventListener('hide.bs.dropdown', () => {
        item.classList.remove('show');
    });
});
