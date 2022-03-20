import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:90,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        paddingLeft:10,
        paddingRight:20,
        backgroundColor:COLORS.white,
        marginVertical:5,
        borderRadius:10,
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    image:{
        width:60,
        height:60,
        resizeMode:'cover',
        borderRadius:5,
        marginRight:10,
    },
    title:{
        fontSize:12,
        fontWeight:'bold',
    },
    description:{
        fontSize:10,
        color:COLORS.placeholder
    },
})