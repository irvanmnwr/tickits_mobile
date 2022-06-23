import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import {View, Text, ScrollView} from 'react-native';
import QRCode from 'react-qr-code';
import styles from './styles';
import Footer from '../../components/Footer';

function Tickets(props) {
  const bookingId = props.route.params.id;
  console.log(bookingId);
  const [data, setData] = useState({});
  useEffect(() => {
    getdataBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdataBooking = async () => {
    try {
      console.log('GET DATA BOOKING');
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      // console.log(params.id);
      const resultMovie = await axios.get(`booking/${bookingId}`);
      // Output
      setData(resultMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(data);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.scheduleCard}>
          <Text>hellowords</Text>
          <QRCode
            title="Tickitz Mobile"
            value={props.route.params.id}
            bgColor={'white'}
            fgColor={'black'}
            size={150}
          />
        </View>
        {data ? (
          <View style={styles.scheduleCard2}>
            <View style={styles.detailContainer}>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Movie</Text>
                <Text style={styles.detailTitle}>{data.name}</Text>
              </View>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Category</Text>
                <Text style={styles.detailTitle}>{data.category}</Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Date</Text>
                <Text style={styles.detailTitle}>{data.dateBooking}</Text>
              </View>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Time</Text>
                <Text style={styles.detailTitle}>{data.timeBooking}</Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Count</Text>
                <Text style={styles.detailTitle}>{data.totalTicket}</Text>
              </View>
              <View style={styles.detailCard}>
                <Text style={styles.detailGenre}>Seats</Text>
                <Text style={styles.detailTitle}>{data.seat}</Text>
              </View>
            </View>
            <View style={styles.payment}>
              <Text style={styles.detailTitle}>
                Total : {data.totalPayment}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.scheduleCard2}>
            <Text style={styles.detailTitle}>Loading</Text>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Tickets;
