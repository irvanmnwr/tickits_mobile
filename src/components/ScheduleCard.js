import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default function ScheduleCard(props) {
  console.log(props.date);
  console.log(props.dataSchedule);
  const [dataOrder, setDataOrder] = useState({
    scheduleId: props.dataSchedule.id,
    premiere: props.dataSchedule.premiere,
    dateBooking: props.date,
    movieName: props.dataSchedule.name,
    price: props.dataSchedule.price,
  });

  const changeDataBooking = data => {
    setDataOrder({...dataOrder, ...data});
  };
  return (
    <View style={styles.scheduleCard}>
      {props.dataSchedule.premiere === 'ebu.id' ? (
        <Image
          style={styles.scheduleCardImage}
          source={require('../assets/studio1.png')}
        />
      ) : props.dataSchedule.premiere === 'primere' ? (
        <Image
          style={styles.scheduleCardImage}
          source={require('../assets/studio2.png')}
        />
      ) : (
        <Image
          style={styles.scheduleCardImage}
          source={require('../assets/studio3.png')}
        />
      )}

      <Text style={styles.scheduleGenre}>
        Whatever street No.12, {props.dataSchedule.location}
      </Text>
      <View style={styles.timeList}>
        {props.dataSchedule.time.split(',').map(itemTime => (
          <TouchableOpacity
            style={styles.time}
            key={itemTime}
            onPress={() =>
              changeDataBooking({
                timeBooking: itemTime,
              })
            }>
            <Text style={styles.timeText}>{itemTime} WIB</Text>
          </TouchableOpacity>
        ))}
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
          <Text style={styles.priceText2}>Rp. {props.dataSchedule.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => props.handleOrder({dataOrder})}>
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
