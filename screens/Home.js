import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {Header} from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {useScrollToTop} from '@react-navigation/native';

import {Colors} from '../constants/theme';

import homeBanner from '../assets/home_banner.png';
import starterGuideImage from '../assets/starter_guide.png';
import experiencedGuideImage from '../assets/experienced_guide.png';
import veteranGuideImage from '../assets/veteran_guide.png';
import homeRecentImage from '../assets/home_recent.png';
import homeTrendingImage from '../assets/home_trending.png';
import expertOpinionImage from '../assets/expert_opinion.png';

import ImageBanner from '../components/ImageBanner';
import HomeFeaturedItem from '../components/HomeFeaturedItem';
import SmallCard from '../components/SmallCard';

const Home = ({navigation}) => {
  const scrollViewRef = useRef(null);
  useScrollToTop(scrollViewRef);

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
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          pinchGestureEnabled={false}>
          <View style={styles.scrollBody}>
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
              <SmallCard image={homeRecentImage} title="Recent" />
              <SmallCard image={homeTrendingImage} title="Trending" />
            </View>
            <View style={styles.primarySection}>
              <View style={styles.expertOpinion}>
                <Text style={styles.expertOpinionTitle}>
                  Expert Opinion Column
                </Text>
                <Text style={styles.expertOpinionText}>
                  A place to find mental health advice from an accredited
                  source.
                </Text>
                <Image
                  source={expertOpinionImage}
                  style={styles.expertOpinionImage}
                />
              </View>
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
  scrollBody: {
    paddingBottom: 105,
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
  primarySection: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  expertOpinion: {
    width: '100%',
    height: 430,
    backgroundColor: '#FFE382',
    borderRadius: 8,
    padding: 22,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  expertOpinionTitle: {
    fontSize: 34,
    fontWeight: '500',
    lineHeight: 45,
    color: Colors.HOME_VECT_COLOR,
  },
  expertOpinionText: {
    fontSize: 16,
    color: Colors.HOME_VECT_COLOR,
    marginTop: 32,
    lineHeight: 35,
  },
  expertOpinionImage: {
    position: 'absolute',
    marginTop: 32,
    width: '100%',
    height: '43%',
    bottom: 30,
    right: 10,
  },
});
