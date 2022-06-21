import React, {useState} from 'react';
import axios from '../../utils/axios';
import {WebView} from 'react-native-webview';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

function PaymentScreen(props) {
  const booking = props.route.params;
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
      // return (
      //   <WebView
      //     source={{
      //       uri: resultPayment.data.data.redirectUrl,
      //     }}
      //     //   style={{marginTop: 20}}
      //   />
      // );
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
            defaultValue="Jonar El Rodriguez"
            editable={false}
            style={styles.input}
          />
          <Text style={styles.detailLeft}>Email</Text>
          <TextInput
            defaultValue="JonarRodri123@gmail.com"
            editable={false}
            style={styles.input}
          />
          <Text style={styles.detailLeft}>Phone Number</Text>
          <TextInput
            defaultValue="0814456787121"
            editable={false}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.cardButton} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Your Order</Text>
        </TouchableOpacity>
        <WebView
          source={{
            uri: 'https://youtube.com',
          }}
          //   style={{marginTop: 20}}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

export default PaymentScreen;
