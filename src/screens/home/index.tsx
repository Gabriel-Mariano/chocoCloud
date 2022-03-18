import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from './style';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Seja bem-vindo ao choco cloud 🍫
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;