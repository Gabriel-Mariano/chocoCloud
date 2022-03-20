import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
    },
    flatlist:{
        width:'100%',
        paddingHorizontal:5,
    },
    warning:{
        fontWeight:'bold',
        color:COLORS.placeholder,
        marginVertical:20,
    }
})