import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    // Define your button styles here
    backgroundColor: '#ff0036',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignContent: 'center',
   justifyContent: 'center',
   paddingHorizontal: 20,
   marginTop: 15
  },
  text: {
    // Define your text styles here
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800'
  },
});
