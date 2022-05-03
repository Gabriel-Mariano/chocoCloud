import React from 'react';
import { View, Text } from 'react-native';
import { IBadgeProps } from './index.d';
import { useShoppingCart } from '../../context/ShoppingCart';

import { styles } from './styles';

const Badge:React.FC<IBadgeProps> = props => {
    const { title } = props;
    const { cart } = useShoppingCart();

    const renderText = () => {
        return cart.length < 1000
            ? `${cart.length}`
            : '...'
    }

    if(title) {
       return ( 
        <View style={styles.wrapperTitle}>
            <Text>{title}</Text>
        </View>
       );
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