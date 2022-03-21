import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  FlatList, Text } from 'react-native';
import { styles } from './styles';
import { CartItems } from '../../components/CartItems';

const FavoritesScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Lista de favoritos
            </Text>
            {/* <FlatList
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
            /> */}
        </SafeAreaView>
    )
}

export default FavoritesScreen;