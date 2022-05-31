/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useContext} from 'react';
// import {Button} from '@react-native-material/core';
import {setItem, getItem, removeItem} from '../../services/Helpers';
import {AuthContext} from '../../services/Provider';

export default function Dashboard({navigation}) {
    // console.log(route)
    let eek = '';
    const [visibleUcapan, setVisibleUcapan] = React.useState(false);
    // if (route & route.params.data) {
    //     eek = route.params.data;
    // }

    const { onLogout } = useContext(AuthContext)

    async function logout() {
        onLogout();
    }
    return (
        <View>
            <Text>{eek}</Text>
            {visibleUcapan ?
                <Text>
                    HALLOOO
                </Text>
                : null
            }
            <Button
                title="Login"
                onPress={() => {
                    logout()
                }}
            />
        </View>
    );
}
