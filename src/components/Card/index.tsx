import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../Button';
import { ProductsValues } from './index.d';
import { styles } from './styles';

const Card:React.FC<ProductsValues> = props => {
    const {
        id,
        name,
        description,
        image,
        price
    } = props;

    return (
        <View 
            key={id} 
            style={styles.container}
        >
            <Image 
                source={{uri:image}}
                accessibilityLabel={name}
                style={styles.image}
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
                <Button
                    title="Adicionar"
                    background="#00CD66"
                />
            </View>
        </View>
    )
}

export { Card };