import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";

import Home from '../pages/home/Home'
import Logout from '../pages/logout/Logout'
import theme from '../styles/theme.style';
import logoutUser from '../context/actions/logout';
import { AppContext } from '../context/Provider';

const Stack = createNativeStackNavigator();


const protectedRoutes = () => {
    const { authDispatch } = useContext(AppContext);
    return <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR },
        headerRight: () => (
            <TouchableOpacity
                style={{ backgroundColor: '#DDDDDD', padding: 5 }}
                onPress={() => logoutUser()(authDispatch)}>
                <Text
                    style={{
                        fontSize: 10,
                    }}>
                    Logout
                </Text>
            </TouchableOpacity>
        ),
    }}>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title: 'DownLoad Certificate'
            }}
        />

        <Stack.Screen
            name="Logout"
            component={Logout}
        />

    </Stack.Navigator>
}

export default protectedRoutes;