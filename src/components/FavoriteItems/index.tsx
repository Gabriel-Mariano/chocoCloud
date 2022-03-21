import React from 'react';
import { View, Text, Image } from 'react-native';
import { ProductsValues } from '../../context/ShoppingCart/index.d';
import { styles } from './styles';

import imagePlaceholder from '../../assets/image_placeholder.jpeg';

const FavoriteItems:React.FC<ProductsValues> = props => {
    const { name, description, image } = props;

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View>
                    <Image 
                        source={{ uri:image }} 
                        accessibilityLabel={name}
                        style={styles.image}
                        defaultSource={imagePlaceholder}
                    />
                </View>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

export { FavoriteItems };