const dropdowns = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const navVertical = document.querySelector('.nav-ver') // for vertical responsive nav
const dropdownContentsver = document.querySelectorAll('.ver-link');
const serachToggle = document.querySelector('.bx-menu')

serachToggle.addEventListener('click', () => {
    if (navVertical.classList.contains('open')) {
        navVertical.style.transform = 'translateX(100%)';
        navVertical.classList.remove('open');
    } else {
        navVertical.style.transform = 'translateX(-0%)';
        navVertical.classList.add('open');
    }
});


dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', () => {
        const dropdownCont = dropdownContents[index];
        dropdownCont.style.display = (dropdownCont.style.display === 'block') ? 'none' : 'block';
    });
});




navVertical.forEach((dropdown, index) => {
    navVertical.addEventListener('click', () => {
        const dropdownCont = dropdownContentsver[index];
        dropdownCont.style.display = (dropdownCont.style.display === 'block') ? 'none' : 'block';
    });
});
