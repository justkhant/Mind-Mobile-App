import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

import {Colors} from '../constants/theme';
import sleepBanner from '../assets/sleep_banner.png';
import ImageBanner from '../components/ImageBanner';

const Sleep = ({navigation}) => (
  <View style={styles.container}>
    <Header
      containerStyle={styles.header}
      leftComponent={{
        icon: 'account-circle',
        color: Colors.SLEEP_VECT_COLOR,
        size: 28,
      }}
      centerComponent={{text: 'Sleep', style: styles.headerTitle}}
      rightComponent={{
        icon: 'search',
        color: Colors.SLEEP_VECT_COLOR,
        size: 28,
      }}
    />
    <ImageBanner source={sleepBanner} />
  </View>
);

export default Sleep;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.SLEEP_BG_COLOR,
  },
  header: {
    backgroundColor: Colors.SLEEP_BG_COLOR,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Colors.SLEEP_VECT_COLOR,
    fontSize: 25,
    fontWeight: '500',
  },
});
