import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import FooterList from "../components/footer/FooterList";

const Links = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainText}>Link Component</Text>
            <FooterList />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    mainText: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Links;