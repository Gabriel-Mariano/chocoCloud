import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  FlatList, Text } from 'react-native';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';
import { useProduct } from '../../context/Products';
import { ProductsValues } from '../../context/Products/index.d';
import { FavoriteItems } from '../../components/FavoriteItems';

import Icon from 'react-native-vector-icons/Ionicons'

const FavoritesScreen = () => {
    const [favorites, setFavorites ] = useState<ProductsValues[]>([]);
    
    const { products } = useProduct();

    useEffect(()=> {
        handleFilterFavorites()
    },[products])

    const handleFilterFavorites = () => {
        const filterFavorites = products.filter((products) => 
        products.isFavorite
        )

        setFavorites(filterFavorites)
    }

     if(favorites.length === 0){
        return <SafeAreaView style={styles.emptyContent}> 
                    <Icon 
                        name="heart-dislike" 
                        size={36} 
                        color={COLORS.placeholder}
                    />
                    <Text style={styles.warning}>
                        Sua lista de favoritos está vazia
                    </Text>
                </SafeAreaView>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Lista de favoritos
            </Text>
            <FlatList
                data={favorites}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({ item })=> {
                    return (
                        <FavoriteItems
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

export default FavoritesScreen;