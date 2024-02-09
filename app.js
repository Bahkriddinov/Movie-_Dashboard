const dropdowns = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', () => {
        const dropdownCont = dropdownContents[index];
        dropdownCont.style.display = (dropdownCont.style.display === 'block') ? 'none' : 'block';
    });
});
