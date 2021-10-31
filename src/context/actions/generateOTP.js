import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionTypes from '../../store/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default (req) => (dispatch, navigate) => {
    dispatch({
        type: actionTypes.LOADING,
    });
    axiosInstance
        .post('/v2/auth/public/generateOTP', req)
        .then((res) => {
            AsyncStorage.setItem('txnId', res.txnId);
            dispatch({
                type: actionTypes.GENERATE_OTP_SUCCESSS,
                payload: res.txnId,
            });

            navigate('confirm-otp');
        })
        .catch((err) => {
            dispatch({
                type: actionTypes.GENERATE_OTP_FAIL,
                payload: err.error
                    ? err.error
                    : { error: 'Something went wrong, try agin' },
            });
        });
};



