import {Image, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomBtn from '../components/CustomBtn';
import CustomTextInput from '../components/CustomTextInput';
import SocialMedia from '../components/SocialMedia';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={{
          paddingHorizontal: 20,
          height: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/food/food.png')}
          style={{
            width: 90,
            height: 50,
            alignItems: 'stretch',
            position: 'absolute',
            right: 20,
            top: 20,
          }}
        />

        <Text
          style={{
            fontSize: 40,
            marginTop: 50,
            fontWeight: '300',
            color: 'white',

            fontFamily: 'Audiowide-Regular',
          }}>
          Login
        </Text>
        <View
          style={{
            height: 450,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            paddingHorizontal: 30,
          
           
          }}>

<CustomTextInput placeholder = "Enter Email"/>
<CustomTextInput placeholder = "Enter Password " 
secureTextEntry
/>
          <CustomBtn />
          <Text style = {{fontSize: 16 , marginTop: 10}}>
          Don't have an account?` Sign up` here.
          </Text>
           <Text style ={{fontSize: 20 , top: 20, fontWeight: '500'}}> OR</Text>
          <SocialMedia/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
