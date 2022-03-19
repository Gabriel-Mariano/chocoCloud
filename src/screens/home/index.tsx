import React, { useState, useEffect, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, View } from 'react-native';
import { ProductsValues } from './index.d';
import { styles } from './style';

import { useNavigation } from '@react-navigation/native';
import { StackProps } from '../../routes/index.d';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { listProducts } from '../../services/api';


const HomeScreen = () => {
    const [products, setProducts] = useState<ProductsValues[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

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
            <View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;