import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { TYPES } from '../../../redux/actions/Action';
import { useDispatch, useSelector } from 'react-redux';

export default function Account() {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch({
            type: TYPES.LOGOUT_SUCCESS
          })
    }
  return (
    <View>
      <Text>Account</Text>
      <TouchableOpacity
      onPress={logout}
        style={{backgroundColor: 'black', height: 50, justifyContent: 'center', marginTop: 20}}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});
