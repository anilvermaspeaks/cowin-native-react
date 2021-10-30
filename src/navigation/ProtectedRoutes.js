import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home/Home'

const Stack = createNativeStackNavigator();

const protectedRoutes = () => <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
    />
</Stack.Navigator>

export default protectedRoutes;