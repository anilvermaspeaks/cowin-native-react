import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGOUT_USER } from '../../store/actionTypes';

export default () => (dispatch) => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('txnId');
    dispatch({
        type: LOGOUT_USER,
    });
};