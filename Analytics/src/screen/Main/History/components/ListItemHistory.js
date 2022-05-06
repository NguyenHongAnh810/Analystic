import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {historyData} from '../../../../data/fakeData';
import RenderItemHistory from './RenderItemHistory';

export default function ListItemHistory() {
  return (
    <View>
      <FlatList data={historyData} renderItem={RenderItemHistory} />
    </View>
  );
}
