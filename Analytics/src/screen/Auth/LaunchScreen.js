import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import ButtonLogin from '../../components/ButtonLogin';

export default function LaunchScreen({navigation}) {
  const loginOnPress = () => {
    navigation.navigate('Login');
  };
  const registerOnPress = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.35, marginLeft: 32, justifyContent: 'center'}}>
        <Text style={styles.nameApp}>Analytics</Text>
        <Text style={styles.title}>Welcome to Analytics</Text>
        <Text style={styles.content}>A healthy platform for everyday use</Text>
      </View>
      <View style={{flex: 0.3}}>
        <LottieView
          source={require('../../assets/images/29951-healthy-lifestyle-exercise.json')}
          autoPlay
          loop
        />
      </View>
      <View
        style={{flex: 0.35, alignItems: 'center', justifyContent: 'center'}}>
        <ButtonLogin title='Sign in' type="Sign in" onPress={loginOnPress}></ButtonLogin>
        <ButtonLogin title='Sign up' type="Sign up" onPress={registerOnPress}></ButtonLogin>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFDFF',
  },
  nameApp: {
    fontSize: 36,
    color: '#1BBDB0',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
});
