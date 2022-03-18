import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';

const Main = () => {
    return (
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}

export default Main;