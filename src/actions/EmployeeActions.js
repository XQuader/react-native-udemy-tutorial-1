import firebase from 'firebase';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            ToastAndroid.show('Employee successfully created', 300);
            Actions.pop();
        })
        .catch(() => ToastAndroid.show('Error creating employee', 300));
};

export const empoyeesFetch = () => dispatch => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }));
};
