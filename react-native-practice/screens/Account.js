import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/auth";

const Account = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        if (state) {
            const {name, email, role} = state.user;
            setName(name);
            setEmail(email);
            setRole(role);
        }
    }, [state]);

    const handleSubmit = async () => {
        if (email === '' || password === '') {
            alert('All fields required');
            return;
        }
        const resp = await axios.post('https://462d-2601-200-4100-b590-9841-2a5e-4f2f-f434.ngrok-free.app/api/signin', {email, password});
        if (resp.data.error) {
            alert(resp.data.error);
        } else {
            setState(resp.data);
            await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
            alert("Sign in successful");
            navigation.navigate('Home');
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{marginVertical: 100}}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/favicon.png')} style={styles.imageStyles} />
                </View>
                <Text style={styles.signupText}>{name}</Text>
                <Text style={styles.emailText}>{email}</Text>
                <Text style={styles.roleText}>{role}</Text>
                <View style={{marginHorizontal: 24}}>
                    <Text style={{fontSize: 16, color: '#8e93a1'}}>PASSWORD</Text>
                    <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} autoCompleteType="password" />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Update Password</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 10
    },
    emailText: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 10
    },
    roleText: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 10,
        color: 'gray'
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles: {
        width: 100,
        height: 100,
        marginVertical: 20
    }
})

export default Account;