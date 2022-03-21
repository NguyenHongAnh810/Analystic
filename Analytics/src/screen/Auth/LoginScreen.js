import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Color} from '../../assets/color';
import EnterText from '../../components/EnterText';
import LottieView from 'lottie-react-native';
import {TYPES} from '../../redux/actions/Action';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonFG from '../../components/ButtonFG';

const width = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const margin = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(margin, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, []);

  const marginAnimated = margin.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });
  const onPressLogin = () => {
    dispatch({
      type: TYPES.LOGIN_REQUEST,
    });
  };
  const onPressRegiser = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.45, justifyContent: 'center'}}>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <View style={{flex: 0.8}}>
            <LottieView
              source={require('../../assets/images/70133-health-man-purple.json')}
              autoPlay
              loop />
          </View>
        </View>
        <View style={{flex: 0.3, marginLeft: 32}}>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text style={styles.title}>Welcome to </Text>
            <Text style={styles.nameApp}> Analytics</Text>
          </View>
          <Text style={styles.content}>
            A healthy platform for everyday use
          </Text>
        </View>
      </View>
      <View style={{flex: 0.55}}>
        <View style={{flex: 0.3, justifyContent: 'center'}}>
          <EnterText
            placeholder="Email address"
            style={{marginBottom: 20}}
            type="name"
          />
          <EnterText placeholder="Password" type="password" />
        </View>
        <View
          style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
          <ButtonLogin
          title='Sign in'
            type="Sign in"
            borderRadius={10}
            width={width - 40}
            onPress={onPressLogin}></ButtonLogin>
          <Text style={{marginVertical: 16}}>Or connect using</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width - 40,
              marginTop: 20,
            }}>
            <ButtonFG type="facebook" title="facebook" />
            <ButtonFG type="google" title="google" />
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Text style={{color: 'black'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={onPressRegiser}>
              <Text
                style={{
                  color: Color.greenLauch,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameApp: {
    fontSize: 28,
    color: '#1BBDB0',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
});
export default Login;
