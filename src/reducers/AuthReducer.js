import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_SUCCESS:
            return { ...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case LOGIN_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case LOGIN:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
}
