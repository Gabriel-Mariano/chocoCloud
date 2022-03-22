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
import { FavoritesProvider } from './context/Favorites';
import { Routes } from './routes';
import { ProductsProvider } from './context/Products';

const Main = () => {
    const statusBarBackgroundColor = Platform.OS === 'android' ? COLORS.primary : '';

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="default"
                backgroundColor={statusBarBackgroundColor} 
            />
            <ProductsProvider>
                <ShoppingCartProvider>
                    <FavoritesProvider>
                        <NavigationContainer>
                            <Routes/>
                        </NavigationContainer>
                    </FavoritesProvider>
                </ShoppingCartProvider>
            </ProductsProvider>
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