import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text } from 'react-native';
import { CartItems } from '../../components/CartItems';
import { styles } from './styles';

import { COLORS } from '../../themes/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useShoppingCart } from '../../context/ShoppingCart';

const CartScreen = () => {
    const { cart } = useShoppingCart();

    const renderText = () => {
        return cart.length > 1
            ? `${cart.length} produtos selecionados`
            : `${cart.length} produto selecionado`
    }

    if(cart.length === 0){
        return <SafeAreaView style={styles.emptyContent}> 
                    <Icon 
                        name="cart-off" 
                        size={36} 
                        color={COLORS.placeholder}
                    />
                    <Text style={styles.warning}>
                        Seu carrinho está vázio
                    </Text>
                </SafeAreaView>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {renderText()}
            </Text>
            <FlatList
                data={cart}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({ item })=> {
                    return (
                        <CartItems
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default CartScreen;