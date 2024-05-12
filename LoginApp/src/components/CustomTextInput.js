import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomTextInput = ({...props}) => {
  return (
    <View style={{ height: 50,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '10'

    }}>
      <TextInput
        style={{
        
          fontSize: 20,
          height: 50,
          width: '100%',
          justifyContent: 'center',

          paddingHorizontal: 10,
          

        }}
        {...props}
      />
      <View style = {{width: '100%',

        backgroundColor: 'grey',
        height: 1,
        alignSelf: 'center',
    borderWidth: 0.5
      }}/>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
