import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Color} from './../../../assets/color';
import LottieView from 'lottie-react-native';
import RenderTransportation from '../../../components/RenderTransportation';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#072849',
      }}>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: '#5774B0',
        }}>
        <View style={{width: '40%', justifyContent: 'center'}}>
          <Text style = {[styles.title, styles.titleBase]}>Welcome,</Text>
          <Text style = {[styles.titleName, styles.titleBase]}>Anh</Text>
        </View>
        <View style={{width: '60%'}}>
          <LottieView
            loop
            autoPlay
            source={require('../../../assets/images/77636-delivery.json')}></LottieView>
        </View>
      </View>
      <View style={styles.mainView}>
      <View>
        {/* <Text>Your wallet</Text> */}
      </View>
      <RenderTransportation/>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 0.7,
    backgroundColor: '#072849',
  },
  title: {
    fontSize: 24
  },
  titleName: {
    fontSize: 32,
    fontWeight: '600',
    marginTop: 12
  },
  titleBase: {
    color: 'white',
    marginLeft: 20
  }
});
