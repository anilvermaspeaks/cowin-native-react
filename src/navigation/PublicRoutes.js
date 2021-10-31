import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OTPGenerator from '../pages/login/OTP.generator'
import ConfirmOTP from '../pages/login/ConfirmOTP';
import theme from '../styles/theme.style';

const Stack = createNativeStackNavigator();

const publicRoutes = () => <Stack.Navigator initialRouteName="Auth" screenOptions={{
    headerMode: 'screen',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }
}}>
    <Stack.Screen
        name="Auth"
        component={OTPGenerator}
        options={{
            title: 'Generate OTP'
        }}
    />

    <Stack.Screen
        name="confirm-otp"
        component={ConfirmOTP}
        options={{
            title: 'Confirm OTP'
        }}
    />


</Stack.Navigator>


export default publicRoutes;