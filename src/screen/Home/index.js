/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import {getDataMovie} from '../../stores/actions/movie';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const limit = 8;
  const page = 1;
  const [releaseDate, setReleaseDate] = useState('');
  const [movieNow, setMovieNow] = useState([]);
  const month = [
    {number: 1, title: 'Januari'},
    {number: 2, title: 'Februari'},
    {number: 3, title: 'Maret'},
    {number: 4, title: 'April'},
    {number: 5, title: 'Mei'},
    {number: 6, title: 'June'},
    {number: 7, title: 'July'},
    {number: 8, title: 'August'},
    {number: 9, title: 'September'},
    {number: 10, title: 'October'},
    {number: 11, title: 'November'},
    {number: 12, title: 'Desember'},
  ];
  const handleDetail = data => {
    props.navigation.navigate('Detail', {movieId: data.id});
  };
  useEffect(() => {
    console.log(releaseDate);
    getdataMovie();
  }, [releaseDate]);

  useEffect(() => {
    getdataMovieNow();
    getdataMovie();
  }, []);

  const handleSortMonth = item => {
    setReleaseDate(item.number);
  };

  const getdataMovieNow = async () => {
    const date = new Date();
    const months = date.getMonth();
    const dateNow = months;
    try {
      const resultMovie = await axios.get(
        `movie?page=${page}&limit=${limit}&releaseDate=${dateNow}`,
      );
      setMovieNow(resultMovie.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getdataMovie = async () => {
    try {
      // PANGGIL ACTION
      await dispatch(getDataMovie(page, limit, releaseDate));
    } catch (error) {
      console.log(error.response);
    }
  };

  const movie = useSelector(state => state.movie);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.paragrafHome}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.textHome}>Find out now!</Text>
          <Image
            style={styles.imageHome}
            source={require('../../assets/top-wrapper.png')}
          />
        </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.textContainer}>
          <View style={styles.flexParagraf}>
            <Text style={styles.textMain}>Now Showing</Text>
          </View>
          <TouchableOpacity style={styles.flexLink}>
            <Text style={styles.linkMain}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <ScrollView horizontal={true}>
            {movieNow.data ? (
              movieNow.isLoading ? (
                <Text style={styles.buttonText}>loading</Text>
              ) : (
                movieNow.data.map(item => (
                  <Card
                    handleDetail={handleDetail}
                    dataMovie={item}
                    key={item.id}
                  />
                ))
              )
            ) : (
              <Text style={styles.paragrafHome}>dataKosong</Text>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.flexParagraf}>
            <Text style={styles.textUpcoming}>Upcoming Movies</Text>
          </View>
          <TouchableOpacity style={styles.flexLink}>
            <Text style={styles.linkMain}>View all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal={true}>
            {month.map(item =>
              item.number === releaseDate ? (
                <TouchableOpacity
                  style={styles.cardButton2}
                  onPress={() => handleSortMonth(item)}
                  key={item.number}>
                  <Text style={styles.buttonText2}>{item.title}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => handleSortMonth(item)}
                  key={item.number}>
                  <Text style={styles.buttonText}>{item.title}</Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          <ScrollView horizontal={true}>
            {movie.data ? (
              movie.isLoading ? (
                <Text style={styles.buttonText}>loading</Text>
              ) : (
                movie.data.map(item => (
                  <Card
                    handleDetail={handleDetail}
                    dataMovie={item}
                    key={item.id}
                  />
                ))
              )
            ) : (
              <Text style={styles.paragrafHome}>dataKosong</Text>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.bottomContainer}>
          <Text style={styles.paragrafHome}>Be The Vanguard of the</Text>
          <Text style={styles.textHome}>Moviegoers</Text>
          <TextInput style={styles.input} placeholder="Input email" />
          <TouchableOpacity style={styles.botButton}>
            <Text style={styles.botText}>Join Now</Text>
          </TouchableOpacity>
          <Text style={styles.paragrafHome}>
            By joining you as a Tickitz member, we will always send you the
            latest
          </Text>
          <Text style={styles.paragrafHome}>updates via email .</Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default HomeScreen;
