import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:180,
        marginVertical:5,
        marginHorizontal:5,

        backgroundColor:'#fff',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    image:{
        width:'100%',
        height:120,
        resizeMode:'cover',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    wrapperContent:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    title:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:10

    },
    description:{
        fontSize:12,
        color:'#9C9C9C'
    },
    price:{
        fontWeight:'bold',
        color:'#00CD66',
        marginVertical:15,
    }
})