import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet} from 'react-native';
// import {URL_BACKEND} from '@env';

function SplashScreen(props) {
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log({URL_BACKEND});
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen'); // sebelumnya props.navigation.navigate
      } else {
        props.navigation.replace('AuthScreen'); // sebelumnya props.navigation.navigate
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.splashImages}
        source={require('../../assets/logo/logo.png')}
      />
      <Image
        style={styles.splashImage}
        source={require('../../assets/logo/NONTON.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  splashImage: {
    width: 160,
    height: 27,
    padding: 10,
  },
  splashImages: {
    width: 120,
    height: 120,
    padding: 10,
    marginBottom: 20,
  },
});

export default SplashScreen;
