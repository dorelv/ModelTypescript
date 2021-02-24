import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {Styles} from '../styles/Styles'
import { connect } from 'react-redux'

import { GET_ALL_USER_INFO_REQUEST } from '../app/models/users/actions';

//////////////////////////////////

const mapStateToProps = (state, props) => {
    const {id, name, email} = state.user
    return {id, name, email}
}

const mapDispatchToProps = (dispatch, props) => ({
    getAllUserInfo : () => {
        dispatch({
            type: GET_ALL_USER_INFO_REQUEST,
            payload: {}
        })
    }

})

//////////////////////////////////

const LoginView = ({  id, name, email, getAllUserInfo, navigation }) => {

    const {login, text} = Styles

    useEffect(()=> {

        getAllUserInfo()

    },[])

    const navToDettails = () => {
        navigation.navigate('Home', {value: 'Ciao Dorel'})
    }

    return (

    <SafeAreaView style={login}>
        <TouchableOpacity onPress={navToDettails}>
            <Text style={text}>{id}, {name}, {email}</Text>
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
