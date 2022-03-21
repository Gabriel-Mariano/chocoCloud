import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import { useShoppingCart } from '../../context/ShoppingCart';

import { styles } from './styles';

const Badge:React.FC<ViewProps> = props => {
    const { cart } = useShoppingCart();

    const renderText = () => {
        return cart.length < 1000
            ? `${cart.length}`
            : '...'
    }

    return (
        <View style={[
            styles.container,
            props.style
        ]} >
            <Text style={styles.title}>
                {renderText()}
            </Text>
        </View>
    )
}

export { Badge };