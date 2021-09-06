import furnitureServices from '../../services/furnitureServices.js';


export default function(context) {
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        furnitureServices.logout()
            .then(() => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('userId');
                localStorage.removeItem('email');
                [...document.querySelectorAll('nav #user')].forEach(link => link.style.display = 'none');
                [...document.querySelectorAll('nav #guest')].forEach(link => link.style.display = 'block');
                context.page.redirect('/home');
            })
    })
}