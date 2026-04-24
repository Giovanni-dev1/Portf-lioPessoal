function toggleExp(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');
  
  document.querySelectorAll('.exp-header').forEach(h => {
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });

  if (!isOpen) {
    header.classList.add('open');
    body.classList.add('open');
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
  observer.observe(el);
});