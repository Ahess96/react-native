import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import React, {useContext, useEffect} from "react";
import FooterList from '../components/footer/FooterList';
import {LinkContext} from '../context/link';
import axios from 'axios';

const Home = () => {
    const [links, setLinks] = useContext(LinkContext);

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        const {data} = await axios.get("http://localhost:8000/api/links");
        setLinks(data);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainText}>Recent Links</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {links && links.map(item => (
                    <View key={item._id} style={{alignItems: 'center'}}>
                        <View style={styles.box}>
                            <Image style={styles.boxImage}
                                source={{uri: 'https://placeimg.com/500/500/tech'}} />
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <View style={{padding: 5, height: 50}}>
                                    <Text style={styles.boxText}>{item.title}</Text>
                                    <Text style={styles.linkText}>{item.link}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    },
    box: {
        backgroundColor: '#fff',
        width: '92%',
        height: 280,
        borderRadius: 14,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 20,
    },
    boxImage: {height: '70%', width: '100%', borderTopRightRadius: 14, borderTopLeftRadius: 14},
    boxText: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#171717',
    },
    linkText: {
        fontSize: 16,
        color: 'darkgray',
        textDecorationLine: 'underline'
    },
})

export default Home;