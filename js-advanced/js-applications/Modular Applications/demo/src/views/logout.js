export function logoutUser(context) {
    return fetch(`http://localhost:3030/users/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': localStorage.getItem('accessToken')
            }
        })
        .then(() => {
            localStorage.removeItem('_id');
            localStorage.removeItem('email');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('_ownerId');
            context.page.redirect('/');
        })
        .catch(err => alert(err.message))
}