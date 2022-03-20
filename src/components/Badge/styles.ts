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
    }
})