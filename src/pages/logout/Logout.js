import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import logoutUser from '../../context/actions/logout';
import { AppContext } from '../../context/Provider';
import { navigate } from '../../navigation/RootNavigator';

const Logout = () => {
    const { authDispatch } = useContext(AppContext);
    useEffect(() => {
        logoutUser()(authDispatch);
    }, []);
    navigate('Auth')
    return <ActivityIndicator />;
};

export default Logout;