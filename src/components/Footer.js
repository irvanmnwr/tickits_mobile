import React from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Image
        style={styles.footerLogo}
        source={require('../assets/Tickitz_logo.png')}
      />
      <Text style={styles.footerText}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <Text style={styles.footerTitle}>Explore</Text>
      <View style={styles.footerImageList}>
        <Text style={styles.footerText}>Home</Text>
        <Text style={styles.footerText}>List Movie</Text>
      </View>
      <Text style={styles.footerTitle}>Explore</Text>
      <View style={styles.footerImageList}>
        <Image
          style={styles.footerImage}
          source={require('../assets/studio1.png')}
        />
        <Image
          style={styles.footerImage}
          source={require('../assets/studio2.png')}
        />
        <Image
          style={styles.footerImage}
          source={require('../assets/studio3.png')}
        />
      </View>
      <Text style={styles.footerTitle}>Follow Us</Text>
      <View style={styles.footerImageList}>
        <Image
          style={styles.footerLogos}
          source={require('../assets/logo/fb.png')}
        />
        <Image
          style={styles.footerLogos}
          source={require('../assets/logo/ig.png')}
        />
        <Image
          style={styles.footerLogos}
          source={require('../assets/logo/tw.png')}
        />
        <Image
          style={styles.footerLogos}
          source={require('../assets/logo/yt.png')}
        />
      </View>
      <Text style={styles.footerText}>
        © 2020 Tickitz. All Rights Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  footerLogo: {
    width: 200,
    height: 50,
    marginVertical: 25,
  },
  footerText: {
    fontSize: 18,
    color: '#8692A6',
    flex: 1,
  },
  footerTitle: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 25,
  },
  footerImageList: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  footerImage: {
    resizeMode: 'stretch',
    marginHorizontal: 13,
    flex: 1,
    paddingLeft: 40,
  },
  footerLogos: {
    marginRight: 40,
    marginBottom: 60,
  },
});
