const button = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-links a');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
});


links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.documentElement.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 800); // 800ms is the time of the fade-out transition in styles.css
  });
});




