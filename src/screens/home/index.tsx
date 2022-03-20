import React, { useState, useEffect, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, FlatList, ActivityIndicator, Text } from 'react-native';
import { Card } from '../../components/Card';
import { ProductsValues } from '../../context/index.d';
import { COLORS } from '../../themes/colors';
import { styles } from './style';
import { listProducts } from '../../services/api';

import Icon from 'react-native-vector-icons/Entypo'

const HomeScreen = () => {
    const [products, setProducts] = useState<ProductsValues[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        fetchProduct();
    },[]);

    const fetchProduct = useCallback(async () => {
        setIsLoading(true);
        const response = await listProducts();
        setIsLoading(false);
        
        response.success
            ? successResponse(response.data)
            : failedResponse()
    },[]);

    const successResponse = (data:[]) => {
        setProducts(data)
    }

    const failedResponse = () => {
        Alert.alert('Houve uma falha ao listar os produtos.');
    }

    if(isLoading){
        return <SafeAreaView style={styles.container}> 
                    <ActivityIndicator size="large" color={COLORS.primary}/>
               </SafeAreaView>
    }

    if(products.length === 0){
        return <SafeAreaView style={styles.container}> 
                    <Icon 
                        name="emoji-sad" 
                        size={36} 
                        color={COLORS.placeholder}
                    />
                    <Text style={styles.warning}>
                        Nenhum produto encontrado
                    </Text>
                </SafeAreaView>
    }

    return (
        <SafeAreaView style={styles.container}> 
            <FlatList
                data={products}
                style={styles.flatlist}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({ item })=> {
                    return (
                        <Card
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

export default HomeScreen;