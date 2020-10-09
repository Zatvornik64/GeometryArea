import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Это приложение для расчета площади фигур.</Text>
      <Text style={styles.text}>Выбрав нужную фигурку вы попадаете на страничку расчета площади.</Text>
      <Text style={styles.text}>Введя необходимые размеры программа выдаст вам площадь.</Text>
      <Text style={styles.text}>Это приложение делалось для себя.</Text>
      <Text style={styles.text}>Автор: Михаил Пошивалов.</Text>
      <Text style={styles.text}>Если у вас есть пожелания по дальнейшей доработке этого приложения - позвоните автору и скажите об этом!</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  }
})
