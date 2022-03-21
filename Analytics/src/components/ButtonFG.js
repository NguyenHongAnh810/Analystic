import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import { Color } from '../assets/color';

const RenderLogo = ({type = ''}) => {
  switch (type) {
    case 'facebook':

      return (
        <Image
          source={require('../assets/images/fb.png')}
          style={styles.logo}></Image>
      );
    case 'google':
      return (
        <Image
          source={require('../assets/images/gg.png')}
          style={styles.logo}></Image>
      );
    default:
      return <View />;
  }
};

export default function ButtonFG({title = '', type = '', width = 170}) {
    
  return (
    <View>
      <TouchableOpacity style = {[styles.container, {backgroundColor: type == 'facebook'? Color.blueFacebook : '#d32f2f', width: width}]}>
        <RenderLogo type={type}></RenderLogo>
        <Text style = {styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo: {
    height: 26,
    width: 26,
    marginRight: 10
  },
  title: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold'
  }
});
