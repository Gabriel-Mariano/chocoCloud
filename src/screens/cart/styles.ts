import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    wrapperContent:{
        flex:1,
        
        paddingVertical:20,
        paddingHorizontal:10,
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        marginBottom:10,
    },
    text:{
        marginLeft:5,
        marginBottom:10,
    },
    wrapperTotalContent:{
        justifyContent:'flex-end'
    },
    label:{
        textAlign:'right'
    },
    totalValue:{
        fontWeight:'bold',
        fontSize:16
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
    },
    buttomCustom:{
        backgroundColor:COLORS.success,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:50,
        position:'absolute',
        bottom:0,
    }
})