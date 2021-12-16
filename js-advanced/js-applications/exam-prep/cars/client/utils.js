function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function clearUserData() {
    return localStorage.removeItem('userData')
}

function isLogged() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        return true;
    }
    return false;
}


export default {
    setUserData,
    getUserData,
    clearUserData,
    isLogged
}