import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        
        paddingVertical:20,
        paddingHorizontal:10,
    },
    text:{
        marginTop:20,
        marginBottom:10,

        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        color:COLORS.primary,
    },
    flatlist:{
        width:'100%',
        paddingHorizontal:5,
    },
    emptyContent:{
        flex:1,

        justifyContent:'center',
        alignItems:'center'
    },
    warning:{
        fontWeight:'bold',
        color:COLORS.placeholder,
        marginVertical:20,
    }
})