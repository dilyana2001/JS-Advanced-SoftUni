function setUserData(data) {
    const userData = {
        token: data.accessToken,
        email: data.email,
        userId: data._id
    }
    localStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData')) || null;
}

function clearUserData() {
    return localStorage.removeItem('userData')
}

export default {
    setUserData,
    getUserData,
    clearUserData
}