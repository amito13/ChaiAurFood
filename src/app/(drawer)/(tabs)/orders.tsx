import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const orders = () => {
  return (
    <View style={styles.container}>
      <Text>orders</Text>
    </View>
  )
}

export default orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})