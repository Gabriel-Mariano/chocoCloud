import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Button } from '../Button';
import { useShoppingCart } from '../../context/ShoppingCart';
import { useProduct } from '../../context/Products';
import { CardValues } from './index.d';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import { StackProps } from '../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import imagePlaceholder from '../../assets/image_placeholder.jpeg';

const Card: React.FC<CardValues> = props => {
    const {
        id,
        name,
        description,
        image,
        isFavorite,
        price,
        setFilteredData
    } = props;
    const { cart, setCart } = useShoppingCart();
    const { products, setProducts } = useProduct();

    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    const handleAdd = () => {
        const product = {
            id,
            name,
            description,
            isFavorite,
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

    const handleLike = () => {
        const filterProducts = products.map((product)=> 
            product.id === id 
            ? {...product, isFavorite: !isFavorite }
            : product
        )

        setProducts(filterProducts);
        setFilteredData?.(filterProducts);
    }

    const renderIcons = ()  => {
        return isFavorite
            ? <Icon name="heart" size={28} color={COLORS.danger} />
            : <Icon name="heart-outline" size={28} color={COLORS.danger} />
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
                <View style={styles.footer}>
                    <Text style={styles.price}>
                        R$ {price?.toFixed(2)}
                    </Text>
                    <Pressable
                        onPress={handleLike}
                    >
                       {renderIcons()}
                    </Pressable>
                </View>
                {renderButtons()}
            </View>
        </View>
    )
}

export { Card };