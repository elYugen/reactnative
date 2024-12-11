import {View, StyleSheet, Image, Text} from "react-native";

export default function TopBar() {
    const user = {
        name: 'Moi',
        email: 'moi@gmail.com',
        password: 'password@gmail.com',
    };

    return (
        <View style={styles.hometopbar}>
            <View style={styles.hometopbarYou}>
                <View style={styles.hometopbarLogo}>
                    <Image style={styles.hometopbarLogoImg} source={require("../../assets/images/react-logo.png")} alt={"Logo"}/>
                </View>
                <Text style={styles.hometopbarYouTitle}>Bonjour, {user.name}</Text>
            </View>
            <View style={styles.hometopbarNotif}>
                <Image source={require("../../assets/images/025.png")} alt={"Logo"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    hometopbar: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10,
        gap: 20,
        margin: 15
    },
    hometopbarYou: {
        display: "flex",
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    hometopbarYouTitle: {
      fontSize: 20,
    },
    hometopbarLogo: {
        width: 45,
        height: 45,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    hometopbarLogoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    hometopbarNotif: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderRadius: "50%",
        objectFit: "cover",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        fontSize: 24,
        color: "#868686",
    }
})