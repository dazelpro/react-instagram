import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../screens';

const Stack = createStackNavigator();

export const PrivateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="dashboard" options={{headerShown: false}} component={Dashboard} />
        </Stack.Navigator>
    );
};
