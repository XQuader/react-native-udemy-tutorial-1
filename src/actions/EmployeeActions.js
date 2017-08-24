import firebase from 'firebase';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE,
    EMPLOYEE_FIRE,
    EMPLOYEE_CLEAR,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

const TOAST_DURATION = 500;

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            ToastAndroid.show('Employee successfully created', TOAST_DURATION);
            Actions.pop();
            dispatch({ type: EMPLOYEE_CREATE });
        })
        .catch(() => ToastAndroid.show('Error creating employee', TOAST_DURATION));
};

export const employeesFetch = () => dispatch => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }));
};

export const employeeSave = ({ name, phone, shift, uid }) => dispatch => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            ToastAndroid.show('Employee successfully updated', TOAST_DURATION);
            Actions.pop();
            dispatch({ type: EMPLOYEE_SAVE });
        })
        .catch(() => ToastAndroid.show('Error updating employee', TOAST_DURATION));
};

export const employeeFire = (uid) => dispatch => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            ToastAndroid.show('Employee successfully deleted', TOAST_DURATION);
            Actions.pop();
            dispatch({ type: EMPLOYEE_FIRE });
        })
        .catch(() => ToastAndroid.show('Error deleting employee', TOAST_DURATION));
};

export const employeeClear = () => ({ type: EMPLOYEE_CLEAR });
