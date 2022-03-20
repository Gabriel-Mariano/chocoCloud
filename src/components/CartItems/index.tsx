import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ProductsValues } from '../../context/index.d';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import { COLORS } from '../../themes/colors';
import { useShoppingCart } from '../../context';

const CartItems:React.FC<ProductsValues> = props => {
    const { id, name, description, image } = props;
    const { cart, setCart } = useShoppingCart();

    const handleRemove = () => {
        const filterCart = cart.filter((item)=> item.id !== id )

        setCart(filterCart);
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View>
                    <Image 
                        source={{ uri:image }} 
                        accessibilityLabel={name}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <View>
                <Pressable
                    onPress={handleRemove}
                >
                    <Icon name="close" size={24} color={COLORS.danger}/>
                </Pressable>
            </View>
        </View>
    )
}

export { CartItems };