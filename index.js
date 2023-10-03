
function Layout() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'block';
    section.style.marginBottom = '20px';
  });
}

const barsIcon = document.querySelector('.fa-bars');
barsIcon.addEventListener('click', Layout);





