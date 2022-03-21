import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../Button';
import { useShoppingCart } from '../../context';
import { ProductsValues } from './index.d';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';

import imagePlaceholder from '../../assets/image_placeholder.jpeg';

import { useNavigation } from '@react-navigation/native';
import { StackProps } from '../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Card: React.FC<ProductsValues> = props => {
    const {
        id,
        name,
        description,
        image,
        price
    } = props;
    const { cart, setCart } = useShoppingCart();
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    const handleAdd = () => {
        const product = {
            id,
            name,
            description,
            price,
            image
        }
        setCart([...cart, product]);

        navigation.navigate('Cart');
    }

    const handleRemove = () => {
        const filterCart = cart.filter((item) => item.id !== id)

        setCart(filterCart);
    }

    const renderButtons = () => {
        const foundProduct = cart.filter((item) => item.id === id)
        
        return !!foundProduct.length
            ? <Button
                title="Remover"
                background={COLORS.danger}
                onPress={handleRemove}
              />
            : <Button
                title="Adicionar"
                background={COLORS.success}
                onPress={handleAdd}
              />  
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                accessibilityLabel={name}
                style={styles.image}
                defaultSource={imagePlaceholder}
            />
            <View style={styles.wrapperContent}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.price}>
                    R$ {price?.toFixed(2)}
                </Text>
                {renderButtons()}
            </View>
        </View>
    )
}

export { Card };