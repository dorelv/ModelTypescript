import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import {Styles} from '../styles/Styles'

type RouteParams = {
    params : {value: string}
}

type Props = {
    route: RouteParams
}

const Home:React.FC<Props> = ({ route }:Props) => {

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
