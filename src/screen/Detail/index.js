import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import axios from '../../utils/axios';
import styles from './styles';
import Footer from '../../components/Footer';
import ScheduleCard from '../../components/ScheduleCard';

function DetailScreen(props) {
  const movieId = props.route.params.movieId;
  const [data, setData] = useState({});
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    getdataMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdataMovie = async () => {
    try {
      console.log('GET DATA MOVIE');
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      // console.log(params.id);
      const resultMovie = await axios.get(`movie/${movieId}`);
      // Output
      setData(resultMovie.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getdataSchedule();
  }, []);

  const getdataSchedule = async () => {
    try {
      console.log('GET DATA SCHEDULE');
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      const resultSchedule = await axios.get('schedule/?limit=12');
      console.log(resultSchedule.data.data);
      // Output
      setSchedule(resultSchedule.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(data);

  const handleOrder = () => {
    props.navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../../assets/film1.png')} />
        </View>
        <Text style={styles.cardTitle}>{data.name}</Text>
        <Text style={styles.cardGenre}>{data.category}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Release Date</Text>
          <Text style={styles.detailTitle}>
            {data.releaseDate ? data.releaseDate.split('T')[0] : null}
          </Text>
        </View>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Direct By</Text>
          <Text style={styles.detailTitle}>{data.director}</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Duration</Text>
          <Text style={styles.detailTitle}>{data.duration}</Text>
        </View>
        <View style={styles.detailCard}>
          <Text style={styles.detailGenre}>Casts</Text>
          <Text style={styles.detailTitle}>{data.cast}</Text>
        </View>
      </View>
      <View style={styles.sinopsisContainer}>
        <Text style={styles.sinopsisTitle}>Synopsis</Text>
        <Text style={styles.sinopsisGenre}>{data.synopsis}. </Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.cardTitle}>Showtimes and Tickets</Text>
        {schedule.map(item => (
          <ScheduleCard handleOrder={handleOrder} key={item.id} />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailScreen;
