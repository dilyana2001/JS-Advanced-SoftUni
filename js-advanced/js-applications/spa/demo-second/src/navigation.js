import { isAuthenticated } from "./auth.js";


function updateNavigation() {
    if (isAuthenticated()) {
        let guestNavItems = document.getElementsByClassName('guest');
        for (let guestNavItem of guestNavItems) {
            guestNavItem.classList.add('hidden');
        }
    }
}


export default {
    updateNavigation
};