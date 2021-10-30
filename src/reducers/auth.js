import {
    CLEAR_AUTH_STATE,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_USER
} from '../actionTypes';

const auth = (state, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
            };

        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
            };

        default:
            return state;
    }
};

export default auth;