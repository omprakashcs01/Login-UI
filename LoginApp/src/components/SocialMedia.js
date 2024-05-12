import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        top: 40,
      }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/SocialMediaIcons/facebook.png')}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/SocialMediaIcons/twitter.png')}
          style={{height: 50, width: 50, marginTop: 5}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/SocialMediaIcons/google.png')}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({});
