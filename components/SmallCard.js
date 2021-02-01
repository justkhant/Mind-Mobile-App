import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Colors} from '../constants/theme';

const SmallCard = ({image, title, style}) => {
  return (
    <View style={[styles.secondaryCard, style]}>
      <Text style={styles.secondaryCardTitle}>{title}</Text>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  secondaryCard: {
    borderRadius: 8,
    backgroundColor: '#F0EADF',
    height: 190,
    width: '48%',
  },
  secondaryCardTitle: {
    position: 'absolute',
    paddingLeft: 18,
    fontSize: 22,
    bottom: 12,
    fontWeight: '500',
    color: Colors.HOME_VECT_COLOR,
  },
});
