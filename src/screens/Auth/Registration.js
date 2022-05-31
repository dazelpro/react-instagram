import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
// import {InputText, Toolbar, Buttons} from '../../shared';
import {addUser, getUsers} from '../../services/Api';
// import {icons} from '../../constant';

export default function Registration({navigation}) {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function saveUser() {
        addUser({
            email: email,
            name: name,
            password: password,
        }).then((data) => {
            console.log(data.status);
        }).catch((error)=>{
            console.log(error);
        });
    }

    function getUser() {
        getUsers().then((data) => {
            console.log(data.data[0]['user_email']);
        }).catch((error)=>{
            console.log(error);
        });
    }
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Toolbar
                title="Registrasi"
                leftComponent={
                    <Buttons
                        buttonType={0}
                        styleBtn={{
                            justifyContent: 'center',
                            marginTop: 2,
                        }}
                        icon={icons.back}
                        onPress={() => navigation.goBack()}></Buttons>
                }></Toolbar>
            <View style={styles.container}>
                <InputText
                    label="Email"
                    autoCompleteType="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"></InputText>
                <InputText
                    label="Nama"
                    autoCompleteType="name"
                    value={name}
                    onChangeText={text => setName(text)}
                    autoCapitalize="words"></InputText>
                <InputText
                    label="Password"
                    autoCompleteType="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secure="true"></InputText>
                <Buttons
                    buttonType={1}
                    title={'Registrasi'}
                    styleBtn={{
                        marginTop: 20,
                        width: 115,
                        alignSelf: 'flex-end',
                        borderRadius: 5,
                        backgroundColor: '#FF5722',
                    }}
                    onPress={() => saveUser()}></Buttons>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
