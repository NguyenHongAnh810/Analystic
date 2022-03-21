import { call } from 'react-native-reanimated';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {TYPES} from './../actions/Action'
import AsyncStorage from '@react-native-async-storage/async-storage';

function* fetchUser(action) {
   yield put({type: TYPES.LOGIN_SUCCESS})
   yield AsyncStorage.setItem('isLogin', JSON.stringify(true));
}

function* CallRegister(action) {
   
}


export default 
[
   takeLatest(TYPES.LOGIN_REQUEST, fetchUser),
   takeLatest(TYPES.REGISTER_REQUEST, CallRegister),

]