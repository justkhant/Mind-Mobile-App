import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Colors} from '../constants/theme';

const HomeFeaturedItem = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.primaryCard, item.style]}>
        <Image source={item.image} style={styles.featuredImage} />
        <Text style={styles.featuredTitle}>{item.title}</Text>
        <Text style={styles.featuredSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default HomeFeaturedItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  primaryCard: {
    backgroundColor: 'white',
    width: '100%',
    height: 225,
    borderRadius: 8,
    marginTop: 22,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  featuredImage: {
    width: '100%',
    height: '76%',
  },
  featuredTitle: {
    position: 'absolute',
    color: Colors.HOME_VECT_COLOR,
    fontSize: 28,
    fontWeight: '500',
    bottom: 40,
    right: 0,
    paddingRight: 17,
  },
  featuredSubtitle: {
    position: 'absolute',
    color: Colors.HOME_VECT_COLOR,
    bottom: 20,
    right: 0,
    fontSize: 16,
    paddingRight: 17,
  },
});
