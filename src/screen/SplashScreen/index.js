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
    setTimeout(() => {
      // if (token) {
      //   props.navigation.replace('AppScreen'); // sebelumnya props.navigation.navigate
      // } else {
      // }
      props.navigation.replace('AuthScreen'); // sebelumnya props.navigation.navigate
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require('../../assets/Tickitz_logo.png')}
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
    width: 200,
    height: 50,
  },
});

export default SplashScreen;
