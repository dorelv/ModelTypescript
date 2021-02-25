import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'

//////////////////////////////////
import { useSelector, useDispatch } from 'react-redux'

import { apiRequest } from './actions/types';


export default FirstPage = () => {

    const {login, text} = Styles

    const dispatch = useDispatch()
    const reducerState = useSelector(state => state)
    const {messaggio} = reducerState.messaggioReducer

    useEffect(()=> {

      console.log('cioa')

      dispatch(apiRequest())

    },[dispatch])

    return (

    <SafeAreaView style={login}>
        
        <Text style={text}>{messaggio}</Text>
        
    </SafeAreaView>

    );

};



////////////////////////////////////////////////////////////////////////////////////////////////
