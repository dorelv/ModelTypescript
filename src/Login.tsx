import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: { value: string };
};

type Props = {
    navigation: StackNavigationProp<RootStackParamList,'Login' >;
}

const Login : React.FC<Props> = ({ navigation }) => {

    console.log(navigation)

    const {login, text} = Styles

    const navToDettails = () => {
        navigation.navigate('Home', {value: 'Ciao Dorel'})
    }

    return (

    <SafeAreaView style={login}>
        <TouchableOpacity onPress={navToDettails}>
            <Text style={text}>Login page</Text>
        </TouchableOpacity>
    </SafeAreaView>



    );

};

export default Login

////////////////////////////////////////////////////////////////////////////////////////////////
