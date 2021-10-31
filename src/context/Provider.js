import React, { createContext, useReducer } from 'react';
import authReducer from '../store/reducers/auth'

const initialAuthState = {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false,
    txnId: null,
    token: null
}

export const AppContext = createContext(initialAuthState)


const AppProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return <AppContext.Provider value={{ authState, authDispatch }}>{children}</AppContext.Provider>
}

export default AppProvider;
