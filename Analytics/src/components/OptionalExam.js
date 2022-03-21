import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import React from 'react';

import { DataType } from '../utils/Service';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Item = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        flex: 1
      }}>
      <View style={[styles.optional, {backgroundColor: item.color}]}>
        <Image style={styles.icon} source={item.image}></Image>
      </View>
      <Text style={{color: 'black'}}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function OptionalExam() {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 24,
          marginTop: 30,
          marginBottom: 20,
        }}>
        Tư vấn theo chuyên khoa
      </Text>
      <View style={{width: '100%', 
      // alignItems: 'center',
        }}>
        <FlatList
          data={DataType}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          key={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optional: {
    marginHorizontal: width / 12,
    marginBottom: 10,
    height: width / 9,
    width: width / 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  icon: {
    height: width / 16,
    width: width / 16,
  },
});
