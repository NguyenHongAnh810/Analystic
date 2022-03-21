import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Color} from '../assets/color';

const ButtonLogin = ({type = '', height = 52, width = 280, onPress = {}, borderRadius = 50, style, title = ''}) => {
  const [color, setColor] = useState();
  // const [title, setTitle] = useState();
  useEffect(() => {
    switch (type) {
      case 'Sign up':
        setColor('white');
        break;
      case 'Sign in':
        setColor(Color.greenLauch);
        break;
      default:
        break;
    }
  }, [type]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {height: height, width: width, backgroundColor: color, borderRadius: borderRadius},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, {color: type == 'Sign in' ? 'white' : Color.greenLauch}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5,
    borderColor: Color.greenLauch,
    borderWidth: 0.5
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  logoFaceBook: {},
});
export default ButtonLogin;
