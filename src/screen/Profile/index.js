import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  updateUser,
  getUserById,
  updatePassword,
} from '../../stores/actions/user';
import axios from '../../utils/axios';
import {CLOUDINARY} from '@env';
import Icon from 'react-native-vector-icons/Feather';

function Profile(props) {
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.user.data.data.data[0]);
  const [actived, setActived] = useState(false);
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState({});
  const [formPassword, setFormPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [formProfile, setFormProfile] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
  });

  useEffect(() => {
    getdataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload]);

  const handleChangePassword = async () => {
    try {
      console.log(formPassword);
      const result = await dispatch(updatePassword(formPassword));
      setFormPassword({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      // eslint-disable-next-line no-alert
      alert(result.action.payload.data.msg);
      props.navigation.navigate('Profile');
    } catch (error) {
      console.log(error);
    }
  };

  const handleActived = () => {
    setActived(true);
  };

  const handleLaunchCamera = async () => {
    try {
      const options = {
        quality: 0.2,
        mediaType: 'photo',
        cameraType: 'front',
      };
      // You can also use as a promise without 'callback':
      const result = await launchCamera(options);
      setImage(result.assets[0]);
      console.log(result.assets[0]);
      const data = new FormData();
      data.append('image', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].fileName,
      });
      const tes = await axios.patch('user/updateimage', data);
      setUpload(true);
      console.log(tes);
      setActived(false);
      alert('succes Update Image');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLaunchLibrary = async options => {
    try {
      // You can also use as a promise without 'callback':
      const result = await launchImageLibrary(options);
      setImage(result.assets[0]);
      const data = new FormData();
      data.append('image', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].fileName,
      });
      console.log(data);
      const tes = await axios.patch('user/updateimage', data);
      setUpload(true);
      console.log(tes);
      setActived(false);
      alert('succes Updated Image');
    } catch (error) {
      console.log(error);
    }
    // You can also use as a promise without 'callback':
  };

  const handleDeleteImage = async () => {
    try {
      const imageUrl = CLOUDINARY + 'Ticket-online-user/user_q1trqu.png';
      const data = new FormData();
      data.append('image', {
        uri: imageUrl,
        type: 'png',
        name: 'userDefault',
      });
      console.log(data);
      const tes = await axios.patch('user/updateimage', data);
      console.log(tes);
      // setUpload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getdataUser = async () => {
    try {
      // PANGGIL ACTION
      await dispatch(getUserById(dataUser.id));
      setUpload(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChangeUpdate = async () => {
    try {
      const result = await dispatch(updateUser(formProfile));
      getdataUser();
      props.navigation.navigate('Profile');
      // eslint-disable-next-line no-alert
      alert(result.action.payload.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHistory = () => {
    props.navigation.navigate('History');
  };

  const handleChangeForm = (text, name) => {
    setFormPassword({...formPassword, [name]: text});
  };

  const handleChangeProfile = (text, name) => {
    setFormProfile({...formProfile, [name]: text});
  };

  const imageUrl = CLOUDINARY + dataUser.image;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerSeat}>
          <View style={styles.price}>
            <TouchableOpacity style={styles.priceTag}>
              <Text style={styles.priceText}>Detail Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.priceTag2} onPress={handleHistory}>
              <Text style={styles.priceText2}>Order History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scheduleCard2}>
          <Text style={styles.detailLeft} />
          <Image
            style={styles.avatar}
            source={
              !dataUser.image
                ? require('../../assets/user.png')
                : {uri: imageUrl}
            }
          />
          <Text style={styles.cardTitle}>
            {dataUser.firstName} {dataUser.lastName}
          </Text>
          <Text style={styles.detailLeft2}>{dataUser.noTelp}</Text>
          {actived === false ? (
            <TouchableOpacity style={styles.cardButton} onPress={handleActived}>
              <Text style={styles.buttonText}>Change Image</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonCon}>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleLaunchCamera()}>
                <Text style={styles.buttonText}>
                  <Icon color={'white'} size={50} name="camera" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() =>
                  handleLaunchLibrary({
                    quality: 0.3,
                    mediaType: 'photo',
                  })
                }>
                <Text style={styles.buttonText}>
                  <Icon color={'white'} size={50} name="image" />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleDeleteImage()}>
                <Icon color={'white'} size={50} name="trash" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={styles.cardTitle}>Account Settings</Text>
        <View style={styles.scheduleCard}>
          <Text style={styles.detailLeft}>Name</Text>
          <TextInput
            defaultValue={dataUser.firstName}
            style={styles.input}
            onChangeText={text => handleChangeProfile(text, 'firstName')}
          />
          <Text style={styles.detailLeft}>Last Name</Text>
          <TextInput
            defaultValue={dataUser.lastName}
            style={styles.input}
            onChangeText={text => handleChangeProfile(text, 'lastName')}
          />
          <Text style={styles.detailLeft}>Email</Text>
          <TextInput
            defaultValue={dataUser.email}
            onChangeText={text => handleChangeProfile(text, 'email')}
            style={styles.input}
          />
          <Text style={styles.detailLeft}>Phone Number</Text>
          <TextInput
            defaultValue={dataUser.noTelp}
            keyboardType={'numeric'}
            onChangeText={text => handleChangeProfile(text, 'noTelp')}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={handleChangeUpdate}>
          <Text style={styles.buttonText}>Update Changes</Text>
        </TouchableOpacity>
        <Text style={styles.cardTitle}>Account and Privacy</Text>
        <View style={styles.scheduleCard}>
          <Text style={styles.detailLeft}>Old Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => handleChangeForm(text, 'oldPassword')}
          />
          <Text style={styles.detailLeft}>New Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => handleChangeForm(text, 'newPassword')}
          />
          <Text style={styles.detailLeft}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => handleChangeForm(text, 'confirmPassword')}
          />
        </View>
        <TouchableOpacity
          style={
            !formPassword.oldPassword
              ? styles.buttonDisable
              : !formPassword.newPassword
              ? styles.buttonDisable
              : !formPassword.confirmPassword
              ? styles.buttonDisable
              : styles.cardButton
          }
          disabled={
            !formPassword.oldPassword
              ? true
              : !formPassword.newPassword
              ? true
              : !formPassword.confirmPassword
              ? true
              : false
          }
          onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Update Changes</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Profile;
