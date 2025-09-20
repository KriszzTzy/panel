// Tahun otomatis
function exec() {
  document.getElementById('audio').play();
}

document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu
const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');
hamb.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  hamb.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Tutup menu setelah klik link (biar enak di HP)
document.querySelectorAll('#menu a').forEach(a=>{
  a.addEventListener('click', ()=> menu.classList.remove('show'));
});