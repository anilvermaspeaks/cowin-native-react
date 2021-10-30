import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
} from '../../actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default (req) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    });
    axiosInstance
        .post('/v2/auth/public/generateOTP', req)
        .then((res) => {
            AsyncStorage.setItem('token', res.txnId);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res,
            });
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response
                    ? err.response.data
                    : { error: 'Something went wrong, try agin' },
            });
        });
};