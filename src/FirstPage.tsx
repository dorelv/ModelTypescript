import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'

//////////////////////////////////
import { useSelector, useDispatch } from 'react-redux'
import { apiRequest } from './actions/types';

import { StackNavigationProp } from '@react-navigation/stack';
/////////////////////////tipizzazione
type State = {
  messaggioReducer : {messaggio: string}
}

type StackProps = {
  FirstPage: undefined,
  SecondPage: {daPassare: string}
}


type Props = {
  navigation: StackNavigationProp<StackProps, 'FirstPage' >,
}
/////////////////////////

const FirstPage:React.FC<Props> = ({ navigation } ) => {

  console.log(navigation)

    const {login, text} = Styles

    const dispatch = useDispatch()
    const reducerState = useSelector((state:State) => state)
    const {messaggio} = reducerState.messaggioReducer

    useEffect(()=> {

      dispatch(apiRequest())

    },[dispatch])

    return (

    <SafeAreaView style={login}>
        
        <TouchableOpacity onPress={()=> navigation.navigate('SecondPage', {daPassare: messaggio})}>
          <Text style={text}>{messaggio}</Text>
        </TouchableOpacity>
        
    </SafeAreaView>

    );

};

export default FirstPage


////////////////////////////////////////////////////////////////////////////////////////////////
