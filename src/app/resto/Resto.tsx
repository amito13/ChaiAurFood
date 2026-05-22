import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Resto = () => {
  const value = useLocalSearchParams()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Resto: {value.name}</Text>


    </View>
  )
}

export default Resto

const styles = StyleSheet.create({})