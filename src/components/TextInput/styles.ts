import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    wrapperInput:{
        width:'100%',
        height:50,

        flexDirection:'row',
         

        borderRadius:6,
        backgroundColor:COLORS.white,
        
        marginVertical:10,
    },
    label:{
        marginLeft:10,
    },
    leftContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:COLORS.white,

        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    textInput:{
       paddingHorizontal:8,
    },
    rightContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:COLORS.danger,

        borderTopRightRadius:6,
        borderBottomRightRadius:6
    },
    errorMessage:{
        color:COLORS.danger
    }
});