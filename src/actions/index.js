import { FETCH_LIBRARIES, SELECT_LIBRARY } from './types';

export function fetchLibraries() {
    return {
        type: FETCH_LIBRARIES
    };
}

export function selectLibrary(id) {
    return {
        type: SELECT_LIBRARY,
        payload: id
    };
}
