import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import EnterText from '../../components/EnterText';
import ButtonLogin from '../../components/ButtonLogin';
import {TYPES} from '../../redux/actions/Action';
import {Color} from '../../assets/color';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';

const width = Dimensions.get('window').width;

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressRegiser = () => {
    dispatch({
      type: TYPES.REGISTER_REQUEST,
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.7, justifyContent: 'center'}}>
        <Text style={styles.title}>Sign up</Text>
        <EnterText placeholder="Name" style={{marginBottom: 20}} type="name" />
        <EnterText
          placeholder="Email address"
          style={{marginBottom: 20}}
          type="email"
        />
        <EnterText
          placeholder="Password"
          style={{marginBottom: 20}}
          type="password"
        />
        <EnterText
          placeholder="Confirm password"
          style={{marginBottom: 20}}
          type="password"
        />
        <View style={{alignItems: 'center', top: 30}}>
          <ButtonLogin
            type="Sign in"
            borderRadius={10}
            width={width - 40}
            onPress={onPressRegiser}
            title="Sign up"
          />
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: 'black'}}>Alreadys have an account?</Text>
            <TouchableOpacity onPress={onPressLogin}>
              <Text
                style={{
                  color: Color.greenLauch,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 0.3}}>
        <LottieView
          source={require('../../assets/images/36125-greeting-animation-for-call-to-action.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 60,
  },
});
