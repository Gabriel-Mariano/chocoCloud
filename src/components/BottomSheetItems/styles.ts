import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        height:400,

        paddingVertical:20,
        paddingHorizontal:10
    },
    title:{
        color:COLORS.primary,
        fontSize:18,
        textAlign:'center'
    },
    labels:{
        fontSize:18,
        color:COLORS.black,
        marginVertical:10
    },
    footer:{
        paddingHorizontal:20,
    }
})