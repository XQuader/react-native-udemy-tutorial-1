import { EMAIL_CHANGED, LOGIN, PASSWORD_CHANGED } from './types';

export const login = ({ email, password }) => ({
    type: LOGIN,
    payload: { email, password }
});

export const emailChanged = email => ({
    type: EMAIL_CHANGED,
    payload: email
});

export const passwordChanged = password => ({
    type: PASSWORD_CHANGED,
    payload: password
});
