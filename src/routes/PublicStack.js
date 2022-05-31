import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Registration} from '../screens';

const Stack = createStackNavigator();

export const PublicStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="registration" options={{headerShown: false}} component={Registration} />
        </Stack.Navigator>
    );
};
