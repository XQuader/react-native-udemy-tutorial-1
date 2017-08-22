import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    PASSWORD_CHANGED
} from './types';

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });

    Actions.employeeList();
};

const loginFail = dispatch => dispatch({ type: LOGIN_FAIL });

export const loginUser = ({ email, password }) => dispatch => {
    dispatch({ type: LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginSuccess(dispatch, user))
                .catch(() => loginFail(dispatch));
        });
};

export const emailChanged = email => ({
    type: EMAIL_CHANGED,
    payload: email
});

export const passwordChanged = password => ({
    type: PASSWORD_CHANGED,
    payload: password
});
