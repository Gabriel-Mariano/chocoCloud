import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text } from 'react-native';
import { CartItems } from '../../components/CartItems';
import { styles } from './style';
import { useShoppingCart } from '../../context';

const CartScreen = () => {
    const { cart } = useShoppingCart();

    const renderText = () => {
        return cart.length > 1
            ? `${cart.length} produtos selecionados`
            : `${cart.length} produto selecionado`
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