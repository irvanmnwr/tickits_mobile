import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import axios from '../../utils/axios';
import styles from './styles';
import Footer from '../../components/Footer';
import ScheduleCard from '../../components/ScheduleCard';
import {CLOUDINARY} from '@env';
// Dropdown Picker
import DropDownPicker from 'react-native-dropdown-picker';

// Select Dropdown
// import SelectDropdown from 'react-native-select-dropdown';
// const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

// Date Picker
import DatePicker from 'react-native-date-picker';

function DetailScreen(props) {
  const movieId = props.route.params.movieId;
  const [data, setData] = useState({});
  const [schedule, setSchedule] = useState([]);

  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  // Dropdown Picker
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'view All', value: ''},
    {label: 'Bandung', value: 'Bandung'},
    {label: 'Jakarta', value: 'Jakarta'},
  ]);

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
    console.log(value);
    getdataSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getdataSchedule = async () => {
    try {
      console.log('GET DATA SCHEDULE');
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      const resultSchedule = await axios.get(
        `schedule/?limit=12&location=${value}`,
      );
      // Output
      setSchedule(resultSchedule.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleOrder = dataOrder => {
    props.navigation.navigate('Order', {dataOrder: dataOrder});
  };

  const [time, setTime] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const imageUrl = CLOUDINARY + data.image;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.cardImage}
          />
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
        {/* Date Picker */}
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => setOpenDate(true)}>
          <Text style={styles.buttonText}>
            {date.toISOString().split('T')[0]}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={openDate}
          date={date}
          onConfirm={datePick => {
            setOpenDate(false);
            setDate(datePick);
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
        {/* End Date Picker */}
        <DropDownPicker
          style={styles.cardButton}
          open={openDropdown}
          value={value}
          items={items}
          setOpen={setOpenDropdown}
          setValue={setValue}
          setItems={setItems}
        />
        {/* End Dropdown Picker */}
        {schedule.map(item =>
          data.name === item.name ? (
            <ScheduleCard
              handleOrder={handleOrder}
              dataSchedule={item}
              date={date.toISOString().split('T')[0]}
              setTime={setTime}
              setSchedule={setScheduleTime}
              schedule={scheduleTime}
              time={time}
              key={item.id}
            />
          ) : null,
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailScreen;
