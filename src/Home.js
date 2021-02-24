import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import {Styles} from '../styles/Styles'

const Home = ({ route }) => {

    const {home, text} = Styles
    const {value} = route.params

    return (

        <SafeAreaView style={home}>
            <Text style={text}>{value}</Text>
        </SafeAreaView>

    );

};

export default Home

////////////////////////////////////////////////////////////////////////////////////////////////
