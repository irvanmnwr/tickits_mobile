import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
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
  },
});

export default SplashScreen;
