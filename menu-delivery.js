const toggle = document.getElementById('delivery-toggle');
const menu = document.querySelector('.delivery-menu');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.toggle('hidden');
});

// fecha o menu se clicar fora
document.addEventListener('click', function (e) {
  if (!e.target.closest('.delivery-dropdown')) {
    menu.classList.add('hidden');
  }
});