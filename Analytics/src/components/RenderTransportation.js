import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DataType} from '../utils/Service';

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title.name}</Text>
//   </View>
// );

export default function RenderTransportation() {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View
          style={{
            width: '80%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{resizeMode: 'contain', width: '30%', height: '70%', marginLeft: 10}}
          />
          <Text style={styles.nameType}>{item.name}</Text>
        </View>
        <View
          style={{
            borderEndWidth: 1,
            width: '10%',
            height: '80%',
            borderEndColor: 'white',
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.title}>Transportation</Text>
      <FlatList
        data={DataType}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
        style={{marginTop: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    marginLeft: '5%',
    marginTop: 20,
    fontSize: 18,
  },
  nameType: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 10
  },
  item: {
    width: '40%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#5774B0',
    borderRadius: 12,
    marginHorizontal: '5%',
    marginVertical: 10,
    alignItems: 'center',
  },
});
