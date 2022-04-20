import React, { useState, useEffect, useCallback} from 'react';
import { 
    Alert, 
    FlatList, 
    ActivityIndicator, 
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { Input } from '../../components/TextInput';
import { useProduct } from '../../context/Products';
import { ProductsValues } from '../../context/ShoppingCart/index.d';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';
import { listProducts } from '../../services/api';

import IconEmoji from 'react-native-vector-icons/Entypo';
import IconSearch from 'react-native-vector-icons/Feather';
import IconFilter from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const [search, setSearch] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState<ProductsValues[]>([]);

    const { products, setProducts } = useProduct();

    useEffect(()=> {
        fetchProduct();
    },[]);

    useEffect(()=>{
        candySearch(search);
    },[search]);

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
        setFilteredData(data)
    }

    const failedResponse = () => {
        Alert.alert('Houve uma falha ao listar os produtos.');
    }

    const candySearch = useCallback((text:string)=> {
        if(text){
            const filterProducts = products.filter((product)=>{
                const item = product.name?.toUpperCase();
                const textUpperCase = text.toUpperCase();
    
                return item!.indexOf(textUpperCase) > -1;
            });
            setFilteredData(filterProducts);
            setSearch(text); 
        }else{
            setFilteredData(products);
            setSearch(text);
        }
    },[search]);
    
    if(isLoading){
        return <SafeAreaView style={styles.container}> 
                    <ActivityIndicator size="large" color={COLORS.primary}/>
               </SafeAreaView>
    }

    if(products.length === 0){
        return <SafeAreaView style={styles.container}> 
                    <IconEmoji 
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
            <View style={styles.searchWrapper}>
                <Input 
                    label="Pesquise pelo produto"
                    placeholder="Ex: Bolo de chocolate, pudim ... "
                    value={search}
                    onChangeText={(text)=> setSearch(text)}
                    leftContent={()=> <IconSearch name="search" size={18}/> }
                    style={styles.input}
                />
                <TouchableOpacity 
                    onPress={()=> setIsActive(!isActive) }
                    style={[ 
                        styles.buttonFilter,
                        {
                            backgroundColor:isActive 
                                ? COLORS.primary 
                                : COLORS.white
                        }
                    ]}
                >
                    <IconFilter 
                        name="filter" 
                        size={18}
                        color={
                            isActive 
                                ? COLORS.white 
                                : COLORS.dark
                        }
                    />
                </TouchableOpacity>
            </View> 
            <FlatList
                data={filteredData}
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
                            isFavorite={item.isFavorite}
                            image={item.image}
                            filteredData={filteredData}
                            setFilteredData={setFilteredData}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;