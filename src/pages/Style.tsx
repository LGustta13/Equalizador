import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#716F6F",
    },

    textBox: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 85
    },

    text: {
        fontSize: 45,
        fontWeight: "bold",
        color: "white"
    },

    content: {
        flexDirection: 'row'
    },

    volumeBox: {
        backgroundColor: "#C4C4C4",
        width: 92,
        height: 92,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 64,
        marginLeft: 66,
        marginRight: 140
    },

    colorBox: {
        width: 25,
        height: 25,
        marginBottom: 10,
    },

    subBox: {
        borderWidth: 1,
        borderColor: "white",
        width: 148,
        height: 43.26,
        borderRadius: 22.77,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 20
    },

    subText: {
        color: "white",
    },

})
