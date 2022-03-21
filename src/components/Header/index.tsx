import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Badge } from '../Badge';
import Icon from 'react-native-vector-icons/Feather'
import Logo from '../../assets/favicon.png';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../routes/index.d';

import { styles } from './styles';
import { COLORS } from '../../themes/colors';
import { useShoppingCart } from '../../context';

const Header: React.FC = () => {
    const location = useRoute();
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    const { cart } = useShoppingCart();

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
            <Icon 
                name="arrow-left" 
                size={22} 
                color={COLORS.white}
            />
        </Pressable>
    );

    const renderContentRight = () => (
        <Pressable onPress={()=> navigation.navigate('Cart') }>
            <Icon 
                name="shopping-cart" 
                size={22} 
                color={COLORS.white}
            />
            {renderBadge()}
        </Pressable>
    );

    const renderBadge = () => {
        return cart.length > 0
            ? <Badge style={styles.badge} />
            : null
    }

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
