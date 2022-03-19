import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:188,
        marginVertical:10,

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
        fontSize:16,
        fontWeight:'bold',
        marginVertical:10

    },
    description:{
        color:'#9C9C9C'
    },
    price:{
        fontWeight:'bold',
        color:'#00CD66',
        marginVertical:15,
    }
})