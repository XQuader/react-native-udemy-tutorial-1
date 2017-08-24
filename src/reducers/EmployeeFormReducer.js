import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_SAVE,
    EMPLOYEE_FIRE,
    EMPLOYEE_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
        case EMPLOYEE_SAVE:
        case EMPLOYEE_FIRE:
        case EMPLOYEE_CLEAR:
            return INITIAL_STATE;
        default:
            return state;
    }
}
