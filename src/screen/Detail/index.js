import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import ScheduleCard from '../../components/ScheduleCard';

function DetailScreen(props) {
  const handleOrder = () => {
    props.navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../../assets/film1.png')} />
        </View>
        <Text style={styles.cardTitle}>Spider-Man: Homecoming</Text>
        <Text style={styles.cardGenre}>Adventure, Action, Sci-fi</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Release Date</Text>
          <Text style={styles.detailTitle}>June 28, 2017</Text>
        </View>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Direct By</Text>
          <Text style={styles.detailTitle}>Jon Watss</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Duration</Text>
          <Text style={styles.detailTitle}>2 hours 30 minutes</Text>
        </View>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Casts</Text>
          <Text style={styles.detailTitle}>
            Tom Holland, Robert Downey Jr., etc.
          </Text>
        </View>
      </View>
      <View style={styles.sinopsisContainer}>
        <Text style={styles.sinopsisTitle}>Synopsis</Text>
        <Text style={styles.sinopsisGenre}>
          Thrilled by his experience with the Avengers, Peter returns home,
          where he lives with his Aunt May, under the watchful eye of his new
          mentor Tony Stark, Peter tries to fall back into his normal daily
          routine - distracted by thoughts of proving himself to be more than
          just your friendly neighborhood Spider-Man - but when the Vulture
          emerges as a new villain, everything that Peter holds most important
          will be threatened.{' '}
        </Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.cardTitle}>Showtimes and Tickets</Text>
        <ScheduleCard handleOrder={handleOrder} />
        <ScheduleCard handleOrder={handleOrder} />
        <ScheduleCard handleOrder={handleOrder} />
        <ScheduleCard handleOrder={handleOrder} />
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailScreen;
