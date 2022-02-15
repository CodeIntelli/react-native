/* eslint-disable prettier/prettier */
//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import colors from '../misc/colors';
import {RightCircleFilled} from '@ant-design/icons';
// create a component
const RoundIconBtn = ({onPress}) => {
  return <RightCircleFilled onPress={onPress} />;
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
//make this component available to the app
export default RoundIconBtn;
