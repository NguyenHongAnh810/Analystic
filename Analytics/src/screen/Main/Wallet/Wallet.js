import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {poinData, historyData} from '../../../data/fakeData';
import {Color} from '../../../assets/color';

const RenderList = item => {
  const [srcImage, setSrcImage] = useState(null);
  useEffect(() => {
    switch (item.item.type) {
      case 'Car':
        setSrcImage(require('../../../assets/images/car.png'));
        break;
      case 'Cycle':
        setSrcImage(require('../../../assets/images/cycle0.png'));
        break;
      case 'Walk':
        setSrcImage(require('../../../assets/images/walk.png'));
        break;
      case 'Transport':
        setSrcImage(require('../../../assets/images/bus.png'));
        break;
      default:
        break;
    }
  }, []);
  return (
    <View style={styles.itemHis}>
      <View
        style={{
          flexDirection: 'row',
          width: '60%',
          height: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={srcImage}
          style={{
            resizeMode: 'contain',
            width: '20%',
            height: '70%',
            marginLeft: 10,
            marginRight: 20,
          }}
        />
        <Text>{item.item.type}</Text>
      </View>
      <Text>{item.item.point}</Text>
    </View>
  );
};

export default function Wallet() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textPoint}>{poinData.count}</Text>
        <Text style={{color: 'black', fontSize: 16}}> pt</Text>
      </View>
      <View style={styles.detail}>
        <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
          {historyData.map(el => {
            return <RenderList item={el} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 160,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    borderWidth: 2,
    marginVertical: 20,
    borderColor: 'orange',
    flexDirection: 'row',
  },
  textPoint: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
  },
  detail: {
    flex: 1,
    width: '100%',
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    // elevation: 2,
    // paddingTop: 10,
    // backgroundColor: '#FFF0F5'
  },
  itemHis: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'rgba(250,235,215, 1)',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
