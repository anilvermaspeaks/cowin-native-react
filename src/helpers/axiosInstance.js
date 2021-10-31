import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
import { navigate } from '../navigation/RootNavigator';

let headers = {};

const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response.data);
        }),
    async (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error.response.data);
            });
        }

        if (error.response.status === 403 || error.response.status === 401) {
            navigate('Logout');
        } else {
            return new Promise((resolve, reject) => {
                reject(error.response.data);
            });
        }
    },
);

export default axiosInstance;