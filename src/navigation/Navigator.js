import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { AppContext } from '../context/Provider';

const NavigationWrapper = () => {
    const { authState: { isLoggedIn } } = useContext(AppContext);
    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                setAuthLoaded(true);

                setIsAuthenticated(true);
            } else {
                setAuthLoaded(true);

                setIsAuthenticated(false);
            }
        } catch (error) { }
    };


    useEffect(() => {
        getUser();
    }, [isLoggedIn]);

    return (
        <>
            {authLoaded ? (
                <NavigationContainer>
                    {isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />}
                </NavigationContainer>
            ) : (
                <ActivityIndicator />
            )}
        </>
    );



}

export default NavigationWrapper;