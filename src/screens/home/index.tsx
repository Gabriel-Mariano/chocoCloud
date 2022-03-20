import React, { useState, useEffect, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, FlatList } from 'react-native';
import { ProductsValues } from '../../context/index.d';
import { styles } from './style';

import { listProducts } from '../../services/api';
import { Card } from '../../components/Card';

const HomeScreen = () => {
    const [products, setProducts] = useState<ProductsValues[]>([]);

    useEffect(()=> {
        fetchProduct();
    },[]);

    const fetchProduct = useCallback(async () => {
        const response = await listProducts();
        
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