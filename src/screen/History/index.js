import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
// Dropdown Picker
import DropDownPicker from 'react-native-dropdown-picker';

// Select Dropdown
import SelectDropdown from 'react-native-select-dropdown';
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

// Date Picker
import DatePicker from 'react-native-date-picker';

function History(props) {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  // Dropdown Picker
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const handleProfile = () => {
    props.navigation.navigate('Profile');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerSeat}>
          <View style={styles.price}>
            <TouchableOpacity style={styles.priceTag} onPress={handleProfile}>
              <Text style={styles.priceText}>Detail Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.priceTag2}>
              <Text style={styles.priceText2}>Order History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DropDownPicker
          open={openDropdown}
          value={value}
          items={items}
          setOpen={setOpenDropdown}
          setValue={setValue}
          setItems={setItems}
        />
        {/* End Dropdown Picker */}

        {/* Select Dropdown */}
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        {/* Date Picker */}
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Text>Pick Date</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={openDate}
          date={date}
          onConfirm={datePick => {
            setOpenDate(false);
            setDate(datePick);
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />
        {/* End Date Picker */}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default History;
