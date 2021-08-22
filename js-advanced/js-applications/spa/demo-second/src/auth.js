export function saveToken(token) {
    localStorage.setItem('auth_token', token)
}

export function isAuthenticated() {
    return Boolean(localStorage.getItem('auth_token'));

}