import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooking} from '../../stores/actions/booking';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import HistoryCard from '../../components/HistoryCard';

function History(props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());
  const dataUser = useSelector(state => state.user.data.data.data[0]);
  console.log(dataUser.id);
  const booking = useSelector(state => state.booking.data);
  const newDate = date.toISOString().split('T')[0];
  console.log(newDate);
  useEffect(() => {
    getdataBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdataBooking = async () => {
    try {
      // PANGGIL ACTION
      await dispatch(getDataBooking(dataUser.id));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleProfile = () => {
    props.navigation.navigate('Profile');
  };

  const handleTickets = data => {
    props.navigation.replace('Tickets', {id: data.id});
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
        {booking ? (
          booking.map(item => (
            <HistoryCard
              key={item.id}
              dataBooking={item}
              handleTickets={handleTickets}
              newDate={newDate}
            />
          ))
        ) : (
          <Text>loading</Text>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default History;
