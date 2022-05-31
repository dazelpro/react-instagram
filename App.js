import React from 'react';
import {Router} from './src/routes/Router';
import {AuthProvider} from './src/services/Provider';

const App = () => {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
};

export default App;