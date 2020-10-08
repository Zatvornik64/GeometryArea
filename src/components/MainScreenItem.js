import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'

export const MainScreenItem = ({ figure, onOpen }) => {
  
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(figure)}> 
        <ImageBackground style={styles.image} source={figure.img ? figure.img : require('../../assets/noimage.png')}>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    borderWidth: 0,
    width: 200,
    height: 150
  },
})
