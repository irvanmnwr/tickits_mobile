import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
// import axios from '../../utils/axios';
import styles from './styles';

function ForgotPassword(props) {
  const [form, setForm] = useState({
    email: '',
  });
  const handleForgotPassword = async () => {
    try {
      console.log(form);
      //   const result = await axios.post('auth/register', form);
      props.navigation.navigate('Login');
      //   alert(result.data.msg);
    } catch (error) {
      console.log(error);
    }
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
        <Text style={styles.textLogin}>Forgot Password</Text>
        <Text style={styles.paragrafLogin}>
          we'll send a link to your email shortly
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Input your email ..."
          style={styles.input}
          onChangeText={text => handleChangeForm(text, 'email')}
        />
        <TouchableOpacity
          style={!form.email ? styles.buttonDisable : styles.buttonPrimary}
          onPress={handleForgotPassword}
          disabled={!form.email ? true : false}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPassword;
