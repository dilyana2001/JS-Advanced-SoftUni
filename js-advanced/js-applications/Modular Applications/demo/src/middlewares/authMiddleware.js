import * as authService from '../services/authService.js'

export function authMiddlewear(context, next) {
    let userData = authService.getData();

    if (userData.accessToken) {
        context.isAuthenticated = true;
        context.email = userData.email;
        context.token = userData.email;
        context.userId = userData._id;
    }


    next();
}