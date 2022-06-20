import React from 'react';
import {View, Text, Image, TouchableOpacity, AppRegistry} from 'react-native';
import {StyleSheet} from 'react-native';
import {CLOUDINARY} from '@env';

export default function Card(props) {
  const imageUrl = CLOUDINARY + props.dataMovie.image;
  const image_URL = {uri: imageUrl};
  console.log(image_URL);
  return (
    <View style={styles.card}>
      <Image
        // source={{
        //   uri: 'https://reactnative-examples.com/wp-content/uploads/2021/10/white-lily.jpg',
        // }}
        style={styles.cardImage}
        // source={{
        //   image_URL,
        // }}
        source={require('../assets/film1.png')}
      />
      <Text numberOfLines={1} style={styles.cardTitle}>
        {props.dataMovie.name}
      </Text>
      <Text numberOfLines={1} style={styles.cardGenre}>
        {props.dataMovie.category}
      </Text>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => props.handleDetail({id: props.dataMovie.id})}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

AppRegistry.registerComponent('Card', () => Card);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 200,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  cardImage: {
    width: 160,
    resizeMode: 'stretch',
  },
  cardTitle: {
    marginLeft: 8,
    marginVertical: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardGenre: {
    marginLeft: 10,
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
