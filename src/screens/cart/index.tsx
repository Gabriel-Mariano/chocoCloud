import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text } from 'react-native';
import { CartItems } from '../../components/CartItems';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { COLORS } from '../../themes/colors';
import { useShoppingCart } from '../../context/ShoppingCart';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const { cart } = useShoppingCart();
    const navigation = useNavigation();

    const renderText = () => {
        return cart.length > 1
            ? `${cart.length} produtos selecionados`
            : `${cart.length} produto selecionado`
    }

    const renderLink = () => {
        return cart.length > 0
            ? `Continuar adicionando no carrinho`
            : null 
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
            <Text style={styles.link} onPress={()=> navigation.goBack() }>
                {renderLink()}
            </Text>
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
            <Button 
                title="Confirmar"
                size={46}
                background={COLORS.success}
             />
        </SafeAreaView>
    )
}

export default CartScreen;