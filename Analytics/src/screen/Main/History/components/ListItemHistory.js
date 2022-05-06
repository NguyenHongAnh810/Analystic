import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {historyData} from '../../../../data/fakeData';
import {Color} from '../../../../assets/color';

const RenderItemHistory = ({item, index, backgroundColor}) => {
  const styleCustom = {
    fontWeight: backgroundColor ? '700' : '600',
    fontSize: backgroundColor ? 16 : null,
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? '#556b2f'
            : item.point > 0
            ? `#20b2aa`
            : `#ffa07a`,
        },
      ]}>
      <Text style={[styles.itemColum, styleCustom]}>{backgroundColor? item.id: index+1}</Text>
      <Text style={[styles.itemColum, styleCustom]}>{item.type}</Text>
      <Text style={[styles.itemColum, styleCustom]}>
        {item.length}
        {backgroundColor ? '' : 'km'}
      </Text>
      <Text style={[styles.itemColum, styleCustom]}>{item.dateTime}</Text>
      <Text style={[styles.itemColum, styleCustom]}>{item.point}</Text>
    </TouchableOpacity>
  );
};

export default function ListItemHistory() {
  return (
    <View>
      <RenderItemHistory
        item={{
          id: 'Id',
          length: 'Length',
          type: 'Type',
          dateTime: 'DateTime',
          point: 'Point',
        }}
        backgroundColor
      />
      <FlatList
        data={historyData}
        renderItem={RenderItemHistory}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemColum: {
    width: '20%',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
