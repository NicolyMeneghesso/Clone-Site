function toggleContent(button) {
   const container = button.closest('.expandable-container');
   const icon = button.querySelector('.icon');

   // Alterna o estado do contêiner
   container.classList.toggle('active');

   // Alterna o ícone entre "+" e "-"
   if (icon.classList.contains('fa-plus')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
   } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
   }
}
window.toggleContent = toggleContent;
