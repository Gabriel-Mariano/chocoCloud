import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from './style';

import { useNavigation } from '@react-navigation/native';
import { StackProps } from '../../routes/index.d';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Seja bem-vindo ao choco cloud 🍫
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;