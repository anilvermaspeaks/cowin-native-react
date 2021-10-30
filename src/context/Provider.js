import React, { createContext, useReducer } from 'react';
import authReducer from '../reducers/auth'

const initialAuthState = {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false
}

export const AppContext = createContext(initialAuthState)


const AppProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return <AppContext.Provider value={{ authState, authDispatch }}>{children}</AppContext.Provider>
}

export default AppProvider;
