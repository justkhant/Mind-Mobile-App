import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Colors} from '../constants/theme';

const SmallCard = ({image, title, style}) => {
  return (
    <View style={[styles.secondaryCard, style]}>
      <Image source={image} style={styles.secondaryCardPic} />
      <Text style={styles.secondaryCardTitle}>{title}</Text>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  secondaryCard: {
    borderRadius: 8,
    backgroundColor: '#F0EADF',
    height: 200,
    width: '47%',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  secondaryCardTitle: {
    position: 'absolute',
    paddingLeft: 18,
    fontSize: 22,
    bottom: 12,
    fontWeight: '500',
    color: Colors.HOME_VECT_COLOR,
  },
  secondaryCardPic: {
    width: '100%',
    height: '86%',
  },
});
