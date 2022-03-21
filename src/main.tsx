import * as React from 'react';
import { 
    SafeAreaView, 
    StatusBar, 
    Platform, 
    StyleSheet 
} from 'react-native';
import { COLORS } from './themes/colors';

import { NavigationContainer } from '@react-navigation/native';
import { ShoppingCartProvider } from './context/ShoppingCart';
import { Routes } from './routes';

const Main = () => {
    const statusBarBackgroundColor = Platform.OS === 'android' ? COLORS.primary : '';

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor={statusBarBackgroundColor} 
            />
            <ShoppingCartProvider>
                <NavigationContainer>
                    <Routes/>
                </NavigationContainer>
            </ShoppingCartProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
});

export default Main;