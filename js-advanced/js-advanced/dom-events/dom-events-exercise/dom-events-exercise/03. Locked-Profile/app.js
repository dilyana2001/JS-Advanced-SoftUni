function lockedProfile() {
    let profileButtons = document.querySelectorAll('.profile button');
    for (let index = 0; index < profileButtons.length; index++) {
        profileButtons[index].addEventListener('click', toggle);
    }

    function toggle(e) {
        let button = e.target;
        let profile = button.parentElement;
        let showHide = profile.querySelector('div');
        let input = profile.querySelector('input:checked');
        if (input.value === 'unlock') {
            showHide.style.display = showHide.style.display === 'block' ? 'none' : 'block';
            button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
        }
    }
}