import * as actionTypes from '../actionTypes';

const auth = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case actionTypes.GENERATE_OTP_SUCCESSS:
            return {
                ...state,
                loading: false,
                txnId: payload.txnId,
                isLoggedIn: false
            };

        case actionTypes.GENERATE_OTP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                txnId: null,
                isLoggedIn: false
            };

        case actionTypes.VALIDATE_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                token: payload.otp,
                isLoggedIn: true
            };

        case actionTypes.VALIDATE_OTP_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                token: null,
                isLoggedIn: false
            };

        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                loading: false,
                user: null,
                isLoggedIn: false,
                token: null,
                txnId: null
            };
        default:
            return state;
    }
};

export default auth;