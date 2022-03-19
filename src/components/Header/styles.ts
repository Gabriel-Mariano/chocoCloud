import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal:15,
        backgroundColor: COLORS.primary,
        position: "relative",
    },
    iconRightContainer: {
        position: "absolute",
        left: 0,
        marginLeft: 15,
    },
    iconLeftContainer: {
        position: "absolute",
        right: 0,
        marginRight: 15,
    },
    menuStyle: {
        width:20,
        height: 15
    },
    notificationStyle:{
        width:15,
        height:20
    },
    image:{
        resizeMode:'contain',
        width:90,
        height:45
    }
});