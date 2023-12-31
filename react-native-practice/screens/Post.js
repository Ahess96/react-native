import React, {useState, useContext} from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import FooterList from "../components/footer/FooterList";
import axios from 'axios';
import { LinkContext } from '../context/link';

const Post = () => {
    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");
    const [links, setLinks] = useState(LinkContext);

    const handleSubmit = () => {
        if (link === '' || title === '') {
            alert("Paste url and give it a Title");
            return;
        }
        try {
            const { data } = axios.post("http://localhost:8000/api/post-link", {
                link,
                title,
            });
            console.log("data =>", data);
            setLinks([data, ...links]);
            setTimeout(() => {
                alert("Link posted");
                navigation.navigate("Home");
            }, 500);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.mainText}>POST</Text>
                <View style={{marginHorizontal: 24}}>
                    <Text style={{fontSize: 16, color: "#8e93a1"}}>LINK</Text>
                    <TextInput style={styles.signupInput} value={link} onChangeText={text => setLink(text)} autoCapitalize="none" autoCorrect={false} placeholder="Paste the url" />
                </View>
                <View style={{marginHorizontal: 24}}>
                    <Text style={{fontSize: 16, color: '#8e93a1'}}>TITLE</Text>
                    <TextInput style={styles.signupInput} value={link} onChangeText={text => setTitle(text)} autoCapitalize="sentences" placeholder="Give a title." />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <FooterList />
            </ScrollView>
        </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainText: {
        fontSize: 30,
        textAlign: 'center'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#8e93a1',
        marginBottom: 30
    },
    buttonStyle: {
        backgroundColor: 'darkmagenta',
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        marginHorizontal: 15,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
});

export default Post;