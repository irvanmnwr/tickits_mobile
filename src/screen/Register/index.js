import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import axios from '../../utils/axios';
import styles from './styles';

function Register(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
    password: '',
  });
  const handleRegister = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/register', form);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
      // eslint-disable-next-line no-alert
      alert(result.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/Tickitz_logo.png')}
        />
        <View style={styles.containerTextTop}>
          <Text style={styles.textLogin}>Sign Up</Text>
          <Text style={styles.paragrafLogin}>Fill your additional details</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            placeholder="Input your email ..."
            style={styles.input}
            onChangeText={text => handleChangeForm(text, 'firstName')}
          />
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            placeholder="Input your email ..."
            style={styles.input}
            onChangeText={text => handleChangeForm(text, 'lastName')}
          />
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            placeholder="Input your email ..."
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={text => handleChangeForm(text, 'noTelp')}
          />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Input your email ..."
            style={styles.input}
            onChangeText={text => handleChangeForm(text, 'email')}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="Input your password ..."
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => handleChangeForm(text, 'password')}
          />
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.containerTextBottom}>
            <View style={styles.flexParagraf}>
              <Text style={styles.paragrafLogin}>Already Have Account ? </Text>
            </View>
            <TouchableOpacity style={styles.flexLink} onPress={handleLogin}>
              <Text style={styles.textLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
