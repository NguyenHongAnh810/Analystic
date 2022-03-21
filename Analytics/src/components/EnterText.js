import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import React from 'react';

const Icon = ({type = ''}) => {
  switch (type) {
    case 'name':
      return <Ionicons name="person" size={16} />;
    case 'password':
      return <FontAwesome name="lock" size={16} />;
    case 'email':
      return <Ionicons name="mail" size={16} />;
    default:
      return <View />;
  }
};

export default function EnterText({placeholder = 'xinchao', style, type = ''}) {
  return (
    <View style={[styles.textInput, style]}>
      <View style={styles.icon}>
        <Icon type={type}></Icon>
      </View>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type == 'password' ? true : false}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
