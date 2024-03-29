import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <View>
        <Image
          style={styles.splashImage}
          source={require('../assets/logo/logo2.png')}
        />
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Icon color={'black'} size={35} name="menu" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
  },
  splashImage: {
    width: 180,
    height: 40,
  },
});
