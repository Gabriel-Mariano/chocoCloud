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
    }
})