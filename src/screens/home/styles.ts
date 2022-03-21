import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    flatlist:{
        width:'100%',
    },
    warning:{
        fontWeight:'bold',
        color:COLORS.placeholder,
        marginVertical:20,
    },
    input:{
        marginTop:20 
    }
})