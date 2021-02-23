import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import {Styles} from '../styles/Styles'

export default Home = ({ route, navigation }) => {

    const {home} = Styles

    return (

        <SafeAreaView style={home}>
            <Text>Home page</Text>
        </SafeAreaView>

    );

};

////////////////////////////////////////////////////////////////////////////////////////////////
