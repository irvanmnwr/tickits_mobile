import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import axios from '../../utils/axios';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {getUserById} from '../../stores/actions/user';

function Login(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async () => {
    try {
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      await dispatch(getUserById(result.data.data.id));
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
      // eslint-disable-next-line no-alert
      alert(result.data.msg);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Login Failed');
      console.log(error);
    }
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Tickitz_logo.png')}
      />
      <View style={styles.containerTextTop}>
        <Text style={styles.textLogin}>Sign In</Text>
        <Text style={styles.paragrafLogin}>
          Sign in with your data that you entered during your registration
        </Text>
      </View>
      <View style={styles.card}>
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
          style={
            !form.email
              ? styles.buttonDisable
              : !form.password
              ? styles.buttonDisable
              : styles.buttonPrimary
          }
          onPress={handleLogin}
          disabled={!form.email ? true : !form.password ? true : false}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.containerTextBottom}>
          <View style={styles.flexParagraf}>
            <Text style={styles.paragrafLogin}>Forgot Your Password ? </Text>
          </View>
          <TouchableOpacity
            style={styles.flexLink}
            onPress={handleForgotPassword}>
            <Text style={styles.textLink}>Reset Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTextBottom2}>
          <View style={styles.flexParagraf2}>
            <Text style={styles.paragrafLogin}>Don't Have an Account ? </Text>
          </View>
          <TouchableOpacity style={styles.flexLink2} onPress={handleRegister}>
            <Text style={styles.textLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
