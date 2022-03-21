import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {TYPES} from '../redux/actions/Action';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const ControlStack = props => {
  const isLogin = useSelector(state => state.auth.user.isLogin);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchData = async () => {
    const value = JSON.parse(await AsyncStorage.getItem('idLogin'));
    if (value == true) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
        });
      }
  }
  fetchData();
  }, []);

  return (
    <React.Fragment>
      {isLogin ? <MainStack /> : <AuthStack />}
    </React.Fragment>
  );
};

export default ControlStack;
