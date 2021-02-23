import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';

import {Styles} from '../styles/Styles'

export default Login = ({ route, navigation }) => {

    const {login} = Styles

    navToDettails = () => {
        navigation.navigate('Home')
    }

    return (

    <SafeAreaView style={login}>
        <TouchableOpacity onPress={navToDettails}>
            <Text>Login page</Text>
        </TouchableOpacity>
    </SafeAreaView>



    );

};

////////////////////////////////////////////////////////////////////////////////////////////////
