import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Text } from 'react-native';
import { CartItems } from '../../components/CartItems';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { COLORS } from '../../themes/colors';
import { useShoppingCart } from '../../context/ShoppingCart';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CartScreen = () => {
    const [totally, setTotally] = useState(0);

    const { cart } = useShoppingCart();
    const navigation = useNavigation();

    useEffect(()=>{
        renderTotalValue();
    },[cart])
    
    const renderLink = () => {
        return cart.length > 0
            ? `Continuar adicionando no carrinho`
            : null 
    }

    const renderText = () => {
        return cart.length > 1
            ? `${cart.length} produtos selecionados`
            : `${cart.length} produto selecionado`
    }

    const renderTotalValue = () => {
        const total = cart.reduce((acc,cur)=> acc = acc + cur.price! , 0 )

        setTotally(total);
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
            <View style={styles.top}>
                <View>
                    <Text style={styles.text}>
                        {renderText()}
                    </Text>
                </View>
                <View style={styles.wrapperTotalContent}>
                    <Text style={styles.label}>
                        Total
                    </Text>
                    <Text style={styles.totalValue}>
                        R${totally.toFixed(2)}
                    </Text>
                </View>
            </View>
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