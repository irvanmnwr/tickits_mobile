import React, {useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import {useSelector} from 'react-redux';

function PaymentScreen(props) {
  const dataUser = useSelector(state => state.user.data.data.data[0]);
  const booking = props.route.params;
  // eslint-disable-next-line no-unused-vars
  const [inputs, setInputs] = useState({
    scheduleId: booking.scheduleId,
    dateBooking: booking.dateBooking,
    timeBooking: booking.timeBooking,
    paymentMethod: 'midTrands',
    totalPayment: booking.price * booking.seat.length,
    seat: booking.seat,
  });

  const handlePayment = async () => {
    try {
      const resultPayment = await axios.post('booking/', inputs);
      const URL = resultPayment.data.data.redirectUrl;
      props.navigation.replace('Midtrands', {uri: URL});
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerSeat}>
          <View style={styles.price}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>Total Payment</Text>
            </View>
            <View style={styles.priceTag2}>
              <Text style={styles.priceText2}>
                {booking.price * booking.seat.length}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.cardTitle}>Personal Info</Text>
        <View style={styles.scheduleCard}>
          <Text style={styles.detailLeft}>Name</Text>
          <TextInput
            defaultValue={dataUser.firstName}
            editable={false}
            style={styles.input}
          />
          <Text style={styles.detailLeft}>Email</Text>
          <TextInput
            defaultValue={dataUser.email}
            editable={false}
            style={styles.input}
          />
          <Text style={styles.detailLeft}>Phone Number</Text>
          <TextInput
            defaultValue={dataUser.noTelp}
            editable={false}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Your Order</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default PaymentScreen;
