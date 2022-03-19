import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ShoppingCartProvider } from './context';
import { Routes } from './routes';

const Main = () => {
    return (
        <ShoppingCartProvider>
            <NavigationContainer>
                <Routes/>
            </NavigationContainer>
        </ShoppingCartProvider>
    )
}

export default Main;