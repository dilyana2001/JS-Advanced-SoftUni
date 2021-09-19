function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            let showHide = e.target.parentElement.querySelector('div');
            let input = e.target.parentElement.querySelector('input:checked');
            if (input.value == 'unlock') {
                showHide.style.display = showHide.style.display == 'block' ? 'none' : 'block';
                e.target.textContent = e.target.textContent == 'Show more' ? 'Hide it' : 'Show more';
            }
        }
    })
}