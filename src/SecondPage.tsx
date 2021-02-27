import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';
import {Styles} from '../styles/Styles'

//////////////////////////////////

/////////////////////////tipizzazione

type Route = {
    params: {daPassare: string}
}

type Props = {
    route: Route
}

/////////////////////////

const SecondPage:React.FC<Props> = ({ route }) => {

    const {home, text} = Styles

    const {daPassare} = route.params

    return (

    <SafeAreaView style={home}>
        
        <Text style={text}>{daPassare}</Text>
        
    </SafeAreaView>

    );

};

export default SecondPage


////////////////////////////////////////////////////////////////////////////////////////////////
