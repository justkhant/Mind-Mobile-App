import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';

import {Colors} from '../constants/theme';
import homeBanner from '../assets/home_banner.png';
import starterGuideImage from '../assets/starter_guide.png';
import experiencedGuideImage from '../assets/experienced_guide.png';
import veteranGuideImage from '../assets/veteran_guide.png';

import ImageBanner from '../components/ImageBanner';
import HomeFeaturedItem from '../components/HomeFeaturedItem';
import SmallCard from '../components/SmallCard';

const Home = ({navigation}) => {
  const featuredItemData = [
    {
      image: starterGuideImage,
      title: 'Starter Guide',
      subtitle: 'Our collection for new users!',
      style: styles.starterGuide,
    },
    {
      image: experiencedGuideImage,
      title: 'Experienced Guide',
      subtitle: 'Our collection for experienced users!',
      style: styles.experiencedGuide,
    },
    {
      image: veteranGuideImage,
      title: 'Veteran Guide',
      subtitle: 'Our collection for veteran users!',
      style: styles.veteranGuide,
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        leftComponent={{
          icon: 'account-circle',
          color: Colors.HOME_VECT_COLOR,
          size: 28,
        }}
        centerComponent={{text: 'Home', style: styles.headerTitle}}
        rightComponent={{
          icon: 'search',
          color: Colors.HOME_VECT_COLOR,
          size: 28,
        }}
      />
      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView style={styles.scrollView} pinchGestureEnabled={false}>
          <View style={styles.body}>
            <ImageBanner source={homeBanner} />
            <Text style={styles.featuredHeader}>Featured</Text>
            <FlatListSlider
              data={featuredItemData}
              component={<HomeFeaturedItem />}
              separatorWidth={20}
              autoscroll={false}
              loop={false}
            />
            <View style={styles.secondarySection}>
              <SmallCard title="Recent" />
              <SmallCard title="Trending" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.HOME_BG_COLOR,
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  body: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: Colors.HOME_BG_COLOR,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Colors.HOME_VECT_COLOR,
    fontSize: 25,
    fontWeight: '500',
  },
  featuredHeader: {
    color: Colors.HOME_VECT_COLOR,
    fontSize: 25,
    marginTop: 18,
    paddingLeft: 22,
    fontWeight: '500',
  },
  starterGuide: {
    backgroundColor: '#F0EADF',
  },
  experiencedGuide: {
    backgroundColor: '#CEE2FF',
  },
  veteranGuide: {
    backgroundColor: '#FFE382',
  },
  secondarySection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 18,
  },
});
