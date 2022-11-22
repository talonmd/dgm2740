function toggleMenu() {
  document.getElementById('primary-navigation').classList.toggle('open');
}

const btn = document.getElementById('hamburger-button');

// btn.addEventListener('click', toggleMenu);
btn.onclick = toggleMenu;
