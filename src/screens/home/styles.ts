import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    searchWrapper:{
        paddingHorizontal:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    buttonFilter:{
        width:50,
        height:50,
        marginTop:25,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.white,
        borderRadius:6,
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