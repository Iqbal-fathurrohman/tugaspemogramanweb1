function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
function openMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Untuk looping animasi
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});
