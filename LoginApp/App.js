import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import SignUpScreen from './src/screens/SignUpScreen'

const App = () => {
  return (
    <View style = {{flex: 1}}>
      <SignUpScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})