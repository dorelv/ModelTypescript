import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'

//////////////////////////////////
import { useSelector, useDispatch } from 'react-redux'

import { apiRequest } from './actions/types';

type State = {
  messaggioReducer : {messaggio: string}
}

const FirstPage:React.FC = () => {

    const {login, text} = Styles

    const dispatch = useDispatch()
    const reducerState = useSelector((state:State) => state)
    const {messaggio} = reducerState.messaggioReducer

    useEffect(()=> {

      console.log(reducerState)

      dispatch(apiRequest())

    },[dispatch])

    return (

    <SafeAreaView style={login}>
        
        <Text style={text}>{messaggio}</Text>
        
    </SafeAreaView>

    );

};

export default FirstPage


////////////////////////////////////////////////////////////////////////////////////////////////
