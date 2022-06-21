import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

function History(props) {
  const handleProfile = () => {
    props.navigation.navigate('Profile');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerSeat}>
          <View style={styles.price}>
            <TouchableOpacity style={styles.priceTag} onPress={handleProfile}>
              <Text style={styles.priceText}>Detail Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.priceTag2}>
              <Text style={styles.priceText2}>Order History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scheduleCard2}>
          <Text style={styles.detailLeft2} />
          <Image
            style={styles.avatar}
            source={require('../../assets/studio1.png')}
          />
          <Text style={styles.detailLeft2}>date$Time</Text>
          <Text style={styles.cardTitle}>movie name</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Change Image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default History;
