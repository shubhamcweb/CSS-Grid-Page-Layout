function toggleNav() {
    const pageGrid = document.querySelector('.page-grid');
    pageGrid.classList.toggle('page-grid-expanded')

    const navbar = document.querySelector('nav');
    navbar.classList.toggle('hide-nav');
}