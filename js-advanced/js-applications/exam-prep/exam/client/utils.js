function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

function clearUserData() {
    return localStorage.removeItem('userData')
}


export default {
    setUserData,
    getUserData,
    clearUserData
}