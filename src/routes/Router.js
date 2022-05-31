import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PublicStack} from './PublicStack';
import {PrivateStack} from './PrivateStack';

import {AuthContext} from '../services/Provider';

export const Router = () => {
    const { token, splashLoading } = useContext(AuthContext);

    // if (loading) {
    //     return <Loading />;
    // }
    return (
        <NavigationContainer>
            {token ? <PrivateStack /> : <PublicStack />}
        </NavigationContainer>
    );
};
