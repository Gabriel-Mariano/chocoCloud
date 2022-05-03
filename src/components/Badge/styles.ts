import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        width:20,
        height:15,

        justifyContent:'center',
        alignItems:'center',

        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    title:{
        color:COLORS.white,
        fontSize:10
    },
    wrapperTitle:{
        width:90,
        height:35,

        justifyContent:'center',
        alignItems:'center',

        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
       backgroundColor:COLORS.light,
       marginHorizontal:5 
    }
})