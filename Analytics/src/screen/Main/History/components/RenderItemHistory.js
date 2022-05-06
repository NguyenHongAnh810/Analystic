import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

 const RenderItemHistory = ({item}) => {
  return (
    <View style = {styles.container}>
      <Text>RenderItemHistory1</Text>

    </View>
  )
}

export default RenderItemHistory

const styles = StyleSheet.create({
    container: {
        height: 50,
        // padding: 10,
        backgroundColor: 'green',
        justifyContent: 'space-between'

    }
})