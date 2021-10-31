import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionTypes from '../../store/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default (beneficiaryId, apiRes) => {
    axiosInstance
        .get(`/v2/registration/certificate/public/download?beneficiary_reference_id=${beneficiaryId}`)
        .then((res) => {
            apiRes({ error: null, res })
        })
        .catch((err) => {
            apiRes({ error: err, res: null })
        });
};



