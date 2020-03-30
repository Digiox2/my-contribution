import { SAVE_USER_PROFILE, SAVE_TOKEN } from './actions';

let initialState = {
    userToken: null,
    userProfileObject: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return {
                ...state,
                userToken: action.value
            }


        case SAVE_USER_PROFILE:
            return {
                ...state,
                userProfileObject: action.value
            }
        default:
    }
}