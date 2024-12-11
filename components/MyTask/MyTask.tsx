import {TextInput, View, Image, Text, StyleSheet} from "react-native";
import Checkbox from 'expo-checkbox';
export default function MyTask() {
    return (
        <View style={styles.myTaskBox}>
            <View style={styles.myTaskContent}>
                <Checkbox/>
                <View style={styles.myTaskContentTitle}>
                    <Text style={styles.myTaskTitle}>Ma task</Text>
                </View>
                <View>
                    <Image source={require("../../assets/images/025.png")} alt={"Logo"}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    myTaskBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: 60,
        backgroundColor: "white",
        borderRadius: 15,
        color: "#91949c",
        transitionProperty: "border-color 0.3s ease",
    },
    myTaskContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 15,
        marginTop: -18,
    },
    myTaskContentTitle: {
        display: "flex",
        flexDirection: "column",
        marginLeft: -110,
        color: "#5a5a5a",
    },
    myTaskTitle: {
        fontSize: 20,
        fontWeight: "bold",
    }
})