import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView
} from 'react-native';
import {TYPES} from '../../../redux/actions/Action';
import {useDispatch, useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

const profileData = [
  {
    name: 'structer point',
    icon: '',
  },
  {
    name: 'poin',
    icon: '',
  },
  {
    name: 'profile',
    icon: '',
  },
];

const RenderItemProfile = (item) => {
  return (
    <TouchableOpacity style={styles.itemProfile}>
      <Text>{item.item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Account() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({
      type: TYPES.LOGOUT_SUCCESS,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>Profile</Text>
      <Image
        source={{
          uri: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
        }}
        style={styles.avata}
      />
      <View style={{paddingHorizontal: 20, marginTop: 80}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: 'black',
            width: '100%',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Anh
        </Text>
        <FlatList data={profileData} renderItem={RenderItemProfile} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  avata: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#ccc',
    position: 'absolute',
    marginTop: height / 4 - 60,
    marginLeft: width / 2 - 60,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor: {
    marginLeft: 20,
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mail: {
    marginLeft: 10,
    fontSize: 10,
    color: '#555555',
  },
  circle: {
    height: height,
    width: height,
    backgroundColor: '#FE9E26',
    marginTop: (-3 * height) / 4,
    marginLeft: -height / 4,
    borderRadius: height / 2,
  },
  title: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: 28,
  },
  itemProfile: {
    height: 50,
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: 'silver',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },
});
