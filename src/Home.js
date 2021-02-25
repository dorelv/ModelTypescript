import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import {Styles} from '../styles/Styles'

import { connect } from 'react-redux'
import { GET_CLIENT_INFO_SUCCESS } from '../app/models/binance/actions';

const mapStateToProps = (state, props) => {
    const {timezone, serverTime, rateLimits} = state.binance
    return {timezone, serverTime, rateLimits}
}

const mapDispatchToProps = (dispatch, props) => ({
    getClientInfo : () => {
        dispatch({
            type: GET_CLIENT_INFO_SUCCESS, 
            payload:{}
        })
    }

})

const HomeView = ({ route, timezone, serverTime, rateLimits, getClientInfo }) => {
    
    const {home, text} = Styles
    const {value} = route.params

    useEffect(()=> {

        getClientInfo()

    },[])

    return (

        <SafeAreaView style={home}>
            <Text style={text}>{timezone}</Text>
        </SafeAreaView>

    );

};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView)

export default Home

////////////////////////////////////////////////////////////////////////////////////////////////
