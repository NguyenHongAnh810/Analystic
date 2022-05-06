import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';

export default function Map() {

  return (
    <View style = {{flexDirection: 'column-reverse'}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>
      <TouchableOpacity style={styles.buttonAction}>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonAction: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    position: 'absolute',
    zIndex: 99999,
    borderRadius: 25,
    
  },
});
