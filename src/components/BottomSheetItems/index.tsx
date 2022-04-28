import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const BottomSheetItems:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Ordenar por:
            </Text>
        </View>
    )
}

export { BottomSheetItems };