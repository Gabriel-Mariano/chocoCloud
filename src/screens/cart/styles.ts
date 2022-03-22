import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        
        paddingVertical:20,
        paddingHorizontal:10,
    },
    text:{
        marginLeft:5,
        marginBottom:10,
    },
    link:{
        alignSelf:'center',
        marginTop:10,
        marginBottom:20,
        color:COLORS.danger,
        textDecorationLine: 'underline',
    },
    flatlist:{
        width:'100%',
        paddingHorizontal:5,
        marginBottom:30,
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