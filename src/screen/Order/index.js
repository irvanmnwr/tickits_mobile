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
import styles from './styles';
import Footer from '../../components/Footer';

function OrderScreen(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    console.log(props.route.params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
    props.navigation.navigate('Payment');
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
          <Image
            style={styles.scheduleCardImage}
            source={require('../../assets/studio1.png')}
          />
          <Text style={styles.cinemaName}>Ebu.id Cinema</Text>
          <Text style={styles.movieTitle}>Spider-man: Homecoming</Text>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>June 28, 2017</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>08:00 AM</Text>
            </View>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>One Ticket Price</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>Rp. 80.000</Text>
            </View>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.detail}>
              <Text style={styles.detailLeft}>Seat Choosen</Text>
            </View>
            <View style={styles.detail2}>
              <Text style={styles.detailRight}>C4, C5, C6</Text>
            </View>
          </View>
          <View style={styles.price}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>Total Payment</Text>
            </View>
            <View style={styles.priceTag2}>
              <Text style={styles.priceText2}>Rp. 240.000</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={handleBookingSeat}>
          <Text style={styles.buttonText}>Check Out Now</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default OrderScreen;
