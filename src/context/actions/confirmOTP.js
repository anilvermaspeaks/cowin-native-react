import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionTypes from '../../store/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default (req) => (dispatch, navigate) => {
    dispatch({
        type: actionTypes.LOADING,
    });
    axiosInstance
        .post('/v2/auth/public/confirmOTP', req)
        .then((res) => {
            AsyncStorage.setItem('token', res.token);
            dispatch({
                type: actionTypes.VALIDATE_OTP_SUCCESS,
                payload: res.token,
            });

        })
        .catch((err) => {
            dispatch({
                type: actionTypes.VALIDATE_OTP_FAIL,
                payload: err
                    ? err.error ? err.error : err
                    : { error: 'Something went wrong, try agin' },
            });
        });
};



