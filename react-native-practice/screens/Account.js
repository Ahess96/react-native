import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from 'react';
import FooterList from "../components/footer/FooterList";

const Account = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainText}>Account Component</Text>
            <FooterList />
        </SafeAreaView>
    )

    const styles = StyleSheet.create({
        container: {
            felx: 1,
            justifyContent: 'space-between'
        },
        mainText: {
            fontSize: 30,
            textAlign: 'center'
        }
    })
}

export default Account;