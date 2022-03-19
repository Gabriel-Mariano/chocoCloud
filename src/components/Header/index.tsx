import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import Logo from '../../assets/logo.png';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../routes/index.d';
import { styles } from './styles';

const Header: React.FC = () => {
    const location = useRoute();
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    const renderContentLeft = () => {
        return location.name === 'Home' 
            ? <PressableTabBars />
            : <PressableArrow />
    };

    const goBack = () => {
        if (location.name === 'Cart') {
            navigation.navigate('Home');
        };
    };

    const PressableTabBars = () => (
       <View></View>
    );

    const PressableArrow = () => (
        <Pressable onPress={goBack}>
            <Text>Voltar</Text>
        </Pressable>
    );

    const renderContentRight = () => (
        <Pressable onPress={()=> {} }>
            
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.iconRightContainer}>
                {renderContentLeft()}
            </View>

            <View>
                <Image 
                    source={Logo} 
                    accessibilityLabel="Identidade Visual"
                    style={styles.image}
                />
            </View>

            <View style={styles.iconLeftContainer}>
                {renderContentRight()}
            </View>  
        </View>
    );
};

export { Header };
