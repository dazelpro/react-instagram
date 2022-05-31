import React, {createContext, useState, useEffect} from 'react';
import {setItem, getItem, removeItem} from './Helpers';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');

    const [splashLoading, setSplashLoading] = useState(false);

    const onLogin = (token, email) => {
        setItem(token)
        setToken(token);
        setEmail(email);
    };

    const onLogout = () => {
        setToken('');
        removeItem();
        console.log('keluarrr')
    };

    const isLoggedin = async () => {
        try {
            let token = await getItem();
            if (token) {
                setToken(token);
                console.log('massssuuuk');
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                token,
                splashLoading,
                onLogin,
                onLogout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
