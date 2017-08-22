import { EMAIL_CHANGED, LOGIN, PASSWORD_CHANGED } from './types';

export function login({ email, password }) {
    return {
        type: LOGIN,
        payload: { email, password }
    };
}

export function emailChanged(email) {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
}

export function passwordChanged(password) {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
}
