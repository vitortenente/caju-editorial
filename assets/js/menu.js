/* Menu de navegação no mobile: abre/fecha a lista de links pelo botão hambúrguer. */
(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var menu = document.getElementById('menu-principal');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });

  // fecha ao escolher uma página
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // ao voltar para o desktop o menu volta a ser a barra horizontal
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) setOpen(false);
  });
})();
