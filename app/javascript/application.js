// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "./home/menu.js"
import "./users/footer.js"
import "./users/form.js"


document.querySelectorAll('.dropup-center.dropup').forEach(item => {
    item.addEventListener('show.bs.dropdown', () => {
        item.classList.add('show');
    });

    item.addEventListener('hide.bs.dropdown', () => {
        item.classList.remove('show');
    });
});
