import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Figure3Screen = ({}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Страница фигуры 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  }
})