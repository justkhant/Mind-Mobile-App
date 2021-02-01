import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

import {Colors} from '../constants/theme';
import meditationBanner from '../assets/meditation_banner.png';
import ImageBanner from '../components/ImageBanner';

const Meditation = ({navigation}) => (
  <View style={styles.container}>
    <Header
      containerStyle={styles.header}
      leftComponent={{
        icon: 'account-circle',
        color: Colors.MEDITATION_VECT_COLOR,
        size: 28,
      }}
      centerComponent={{text: 'Meditation', style: styles.headerTitle}}
      rightComponent={{
        icon: 'search',
        color: Colors.MEDITATION_VECT_COLOR,
        size: 28,
      }}
    />
    <ImageBanner source={meditationBanner} />
  </View>
);

export default Meditation;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.MEDITATION_BG_COLOR,
  },
  header: {
    backgroundColor: Colors.MEDITATION_BG_COLOR,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Colors.MEDITATION_VECT_COLOR,
    fontSize: 25,
    fontWeight: '500',
  },
});
