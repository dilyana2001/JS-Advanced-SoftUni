function toggle() {
    let button = document.querySelector('.button');
    let extra = document.querySelector('#extra');
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
    extra.style.display = extra.style.display === 'block' ? 'none' : 'block';
}