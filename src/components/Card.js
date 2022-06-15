import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Card(props) {
  // console.log(props);
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={require('../assets/film1.png')} />
      <Text style={styles.cardTitle}>Movie Title</Text>
      <Text style={styles.cardGenre}>Movie genre</Text>
      <TouchableOpacity style={styles.cardButton} onPress={props.handleDetail}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 200,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  cardImage: {
    width: 160,
    resizeMode: 'stretch',
  },
  cardTitle: {
    margin: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  cardGenre: {
    fontSize: 18,
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
