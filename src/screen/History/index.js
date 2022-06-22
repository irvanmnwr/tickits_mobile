import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooking} from '../../stores/actions/booking';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

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
            <View style={styles.scheduleCard2} key={item.id}>
              <Text style={styles.detailLeft2} />
              {item.premiere === 'ebu.Id' ? (
                <Image
                  style={styles.scheduleCardImage}
                  source={require('../../assets/studio1.png')}
                />
              ) : item.premiere === 'CineOne' ? (
                <Image
                  style={styles.scheduleCardImage}
                  source={require('../../assets/studio2.png')}
                />
              ) : (
                <Image
                  style={styles.scheduleCardImage}
                  source={require('../../assets/studio3.png')}
                />
              )}
              <Text style={styles.detailLeft2}>
                {item.dateBooking.split('T')[0]} {item.timeBooking}
              </Text>
              <Text style={styles.cardTitle}>{item.name}</Text>
              {item.statusUsed === '1' ? (
                item.dateBooking < newDate ? (
                  <TouchableOpacity style={styles.buttonDisable}>
                    <Text style={styles.buttonText}>disable</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.buttonText}>enable</Text>
                  </TouchableOpacity>
                )
              ) : (
                <TouchableOpacity style={styles.buttonDisable}>
                  <Text style={styles.buttonText}>disable</Text>
                </TouchableOpacity>
              )}
            </View>
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
