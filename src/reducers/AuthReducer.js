import { EMAIL_CHANGED, LOGIN, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
   email: '',
   password: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN:
            return state;
        default:
            return state;
    }
}
