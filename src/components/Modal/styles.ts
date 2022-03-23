import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

const styles = StyleSheet.create({
    modal:{
        justifyContent:'space-around',
        alignItems:'center',
        height:390,
        borderRadius:20,
        backgroundColor:COLORS.white,
    },
    wrapperTexts:{
        paddingHorizontal:40,
    },
    titleModal:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:20,
    },
    describeModal:{
        alignSelf:'center',
    },
    button:{
        width:200,
        backgroundColor:'#104E8B',
        height:46,

        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    }
});

export { styles }