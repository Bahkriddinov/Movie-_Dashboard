const dropdowns = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');
const navVertical = document.querySelector('.nav-ver') // for vertical responsive nav
const dropdownContentsver = document.querySelectorAll('.ver-link');
const serachToggle = document.querySelector('.bx-search')
serachToggle.addEventListener('click', ()=>{
    navVertical.style.display = (navVertical.style.display === 'block') ? 'none' : 'block';
})

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
