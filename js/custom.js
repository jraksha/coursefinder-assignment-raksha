// Sidebar script
const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#main-wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

