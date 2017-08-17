import { FETCH_LIBRARIES } from '../actions/types';
import data from './LibraryList.json';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_LIBRARIES:
            return data;
        default:
            return state;
    }
}
