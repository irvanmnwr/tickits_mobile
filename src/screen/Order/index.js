import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Seat from '../../components/Seat';
import axios from '../../utils/axios';
import styles from './styles';
import Footer from '../../components/Footer';

function OrderScreen(props) {
  const dataOrder = props.route.params.dataOrder.dataOrder;
  console.log(dataOrder);
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  useEffect(() => {
    handleReserveSeat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReserveSeat = async () => {
    try {
      console.log('GET DATA seat');
      // Input
      //   console.log(limit);
      //   console.log(page);
      // Proses
      // console.log(state.timeBooking);
      const resultReserveSeat = await axios.get(
        `booking/seat/?scheduleId=${dataOrder.scheduleId}&dateBooking=${dataOrder.dateBooking}&timeBooking=${dataOrder.timeBooking}:00`,
      );
      console.log(resultReserveSeat.data.data.result);
      // Output
      setReservedSeat(resultReserveSeat.data.data.result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = data => {
    console.log(selectedSeat);
    props.navigation.navigate('Payment', {...dataOrder, seat: data.seat});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cardTitle}>Choose Your Seat</Text>
        <View style={styles.containerSeat}>
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
          <Text style={styles.cardTitle}>Seating key</Text>
          <Image
            style={styles.indicatorImage}
            source={require('../../assets/indicator.png')}
          />
          <TouchableOpacity style={styles.cardButton} onPress={handleResetSeat}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardTitle}>Order Info</Text>
        <View style={styles.scheduleCard}>
          {dataOrder.premiere === 'ebu.Id' ? (
            <Image
              style={styles.scheduleCardImage}
              source={require('../../assets/studio1.png')}
            />
          ) : dataOrder.premiere === 'CineOne' ? (
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
          <Text style={styles.cinemaName}> Cinema</Text>
          <Text style={styles.movieTitle}>{dataOrder.movieName}</Text>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>{dataOrder.dateBooking}</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>
                {dataOrder.timeBooking} WIB
              </Text>
            </View>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>One Ticket Price</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>{dataOrder.price}</Text>
            </View>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>Seat Choosen</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>{selectedSeat}</Text>
            </View>
          </View>
          <View style={styles.price}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>Total Payment</Text>
            </View>
            <View style={styles.priceTag2}>
              <Text style={styles.priceText2}>
                {dataOrder.price * selectedSeat.length}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => handleBookingSeat({seat: selectedSeat})}>
          <Text style={styles.buttonText}>Check Out Now</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default OrderScreen;
