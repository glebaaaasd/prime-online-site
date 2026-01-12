window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    if (scrollY + window.innerHeight > section.offsetTop + 100) {
      section.classList.add('visible');
    }
  });
});