import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.paragrafHome}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.textHome}>Find out now!</Text>
          <Image
            style={styles.imageHome}
            source={require('../../assets/top-wrapper.png')}
          />
        </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.textContainer}>
          <View style={styles.flexParagraf}>
            <Text style={styles.textMain}>Now Showing</Text>
          </View>
          <TouchableOpacity style={styles.flexLink}>
            <Text style={styles.linkMain}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <ScrollView horizontal={true}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.flexParagraf}>
            <Text style={styles.textUpcoming}>Upcoming Movies</Text>
          </View>
          <TouchableOpacity style={styles.flexLink}>
            <Text style={styles.linkMain}>View all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>January</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>February</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>March</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>April</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>May</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.buttonText}>June</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          <ScrollView horizontal={true}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.bottomContainer}>
          <Text style={styles.paragrafHome}>Be The Vanguard of the</Text>
          <Text style={styles.textHome}>Moviegoers</Text>
          <TextInput style={styles.input} placeholder="Input email" />
          <TouchableOpacity style={styles.botButton}>
            <Text style={styles.botText}>Join Now</Text>
          </TouchableOpacity>
          <Text style={styles.paragrafHome}>
            By joining you as a Tickitz member, we will always send you the
            latest
          </Text>
          <Text style={styles.paragrafHome}>updates via email .</Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default HomeScreen;
