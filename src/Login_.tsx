import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'
import { connect } from 'react-redux'


import { StackNavigationProp } from '@react-navigation/stack';
import { GET_USERS } from '../app/models/users/actions';

type RootStackParamList = {
    Login: undefined;
    Home: { value: string };
};

type Props = {
    navigation: StackNavigationProp<RootStackParamList,'Login' >,
    id: string,
    name: string,
    email: string
}

//////////////////////////////////

const mapStateToProps = (state, props) => {
    const {id, name, email} = state.user
    return {id, name, email}
}

const mapDispatchToProps = (dispatch, props) => ({
    getAllUserInfo : () => {
        dispatch({
            type: GET_USERS,
            payload: {}
        })
    }

})

//////////////////////////////////

const LoginView = ({ navigation, id, getAllUserInfo }:Props) => {

    console.log(id)

    const {login, text} = Styles

    useEffect(()=> {

        getAllUserInfo()

    },[getAllUserInfo])

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

const Login = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginView)

export default Login

////////////////////////////////////////////////////////////////////////////////////////////////
