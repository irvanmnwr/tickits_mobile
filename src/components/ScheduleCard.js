import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default function ScheduleCard(props) {
  console.log(props);
  return (
    <View style={styles.scheduleCard}>
      <Image
        style={styles.scheduleCardImage}
        source={require('../assets/studio1.png')}
      />
      <Text style={styles.scheduleGenre}>
        Whatever street No.12, South Purwokerto
      </Text>
      <View style={styles.timeList}>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>08:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>08:30 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>09:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>09:30 AM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeList}>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>11:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>11:30 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>12:00 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.time}>
          <Text style={styles.timeText}>21:00 PM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.price}>
        <View style={styles.priceTag}>
          <Text style={styles.priceText}>Price</Text>
        </View>
        <View style={styles.priceTag2}>
          <Text style={styles.priceText2}>Rp. 80.000</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={props.handleOrder}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleCard: {
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  scheduleCardImage: {
    resizeMode: 'stretch',
    margin: 20,
  },
  scheduleGenre: {
    fontSize: 18,
    color: '#8692A6',
    textAlign: 'center',
  },
  timeList: {
    padding: 1,
    paddingTop: 20,
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
  },
  time: {
    flex: 1,
    alignItems: 'flex-start',
  },
  timeText: {
    fontSize: 16,
    color: '#8692A6',
  },
  price: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
  priceTag: {
    flex: 1,
    alignItems: 'flex-start',
  },
  priceTag2: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  priceText: {
    fontSize: 18,
    color: '#8692A6',
  },
  priceText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8692A6',
  },
  cardButton: {
    marginTop: 40,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
