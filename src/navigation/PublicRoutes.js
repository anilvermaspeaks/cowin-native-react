import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login/Login'


const Stack = createNativeStackNavigator();

const publicRoutes = () => <Stack.Navigator>
    <Stack.Screen
        name="Auth"
        component={Login}
        options={{ title: 'Login' }}
    />
</Stack.Navigator>


export default publicRoutes;