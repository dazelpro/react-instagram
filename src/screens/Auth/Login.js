/* eslint-disable prettier/prettier */

import React, {useContext} from 'react';
import type {Node} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {InputText, Buttons} from '../../shared';
// import {icons, images} from '../../constant';
import {auth} from '../../services/Api';
import {AuthContext} from '../../services/Provider';

const Login: () => Node = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {onLogin} = useContext(AuthContext);

    function login() {
        if (email && password) {
            auth({
                email: email,
                password: password,
            })
                .then(async data => {
                    if (data.status == 200) {
                        let toket = data.data.token;
                        onLogin(toket, email);
                    } else {
                        console.log('something is wrong');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log('kosong');
        }
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <View style={styles.container}>
                <Text>Halo</Text>
                {/* <View style={{alignItems: 'center'}}>
                    <Image
                        source={images.logo}
                        style={{width: '60%', height: 70}}
                        resizeMode="stretch"
                    />
                </View>
                <InputText
                    label="Email"
                    autoCompleteType="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"></InputText>
                <InputText
                    label="Password"
                    autoCompleteType="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secure="true"></InputText>
                <Buttons
                    buttonType={1}
                    title={'Login'}
                    styleBtn={{
                        alignSelf: 'flex-end',
                        marginTop: 20,
                        width: 115,
                        borderRadius: 5,
                        backgroundColor: '#FF5722',
                    }}
                    onPress={() => login()}></Buttons>
                <View style={styles.registration}>
                    <Text style={styles.black}>
                        Belum punya akun Sentraltukang?
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('registration')}>
                            {' '}
                            Registrasi sekarang
                        </Text>
                    </Text>
                </View> */}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    link: {
        color: '#FF5722',
    },
    registration: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    black: {
        color: 'grey',
    },
});

export default Login;
