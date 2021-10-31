import React, { useEffect, useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { AppContext } from '../context/Provider';
import { navigationRef } from './RootNavigator';



import theme from '../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: theme.PRIMARY_COLOR,
        secondaryBg: theme.SECONDARY_BACKGROUND_COLOR,
        background: '#fff',
        text: theme.PRIMARY_COLOR,

    },
};

const NavigationWrapper = () => {
    const { authState: { isLoggedIn } } = useContext(AppContext);
    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!!token && token !== 'undefined') {
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
                <NavigationContainer theme={MyTheme} ref={navigationRef}>
                    <View style={styles.container}>{isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />}</View>
                </NavigationContainer>
            ) : (
                <ActivityIndicator />
            )}
        </>
    );
}

export default NavigationWrapper;


