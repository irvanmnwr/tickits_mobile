import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ListHeader(props) {
  const [items, setItems] = useState([
    {label: 'Sort', value: ''},
    {label: 'A to Z', value: 'name ASC'},
    {label: 'Z to A', value: 'name DESC'},
  ]);
  const [openDropdown, setOpenDropdown] = useState(false);

  const month = [
    {number: 1, title: 'Januari'},
    {number: 2, title: 'Februari'},
    {number: 3, title: 'Maret'},
    {number: 4, title: 'April'},
    {number: 5, title: 'Mei'},
    {number: 6, title: 'June'},
    {number: 7, title: 'July'},
    {number: 8, title: 'August'},
    {number: 9, title: 'September'},
    {number: 10, title: 'October'},
    {number: 11, title: 'November'},
    {number: 12, title: 'Desember'},
  ];

  const handleChangeSearch = text => {
    // setSearch(text);
    props.handleChangeSearch(text);
  };

  const handleSortMonth = item => {
    // setReleaseDate(item.number);
    props.handleSortMonth(item.number);
  };
  return (
    <>
      <Text style={styles.cardTitle}>List Movie</Text>
      <View style={styles.content}>
        <View style={styles.sort}>
          <DropDownPicker
            style={styles.cardDrop}
            open={openDropdown}
            value={props.value}
            items={items}
            setOpen={setOpenDropdown}
            setValue={props.setValue}
            setItems={setItems}
          />
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={'black'}
            onChangeText={text => {
              handleChangeSearch(text);
            }}
          />
        </View>
      </View>
      <View>
        <ScrollView horizontal={true}>
          {month.map(item =>
            item.number === props.releaseDate ? (
              <TouchableOpacity
                style={styles.cardButton2}
                onPress={() => handleSortMonth(item)}
                key={item.number}>
                <Text style={styles.buttonText2}>{item.title}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => handleSortMonth(item)}
                key={item.number}>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    padding: 20,
    backgroundColor: '#D6D8E7',
  },
  content: {
    flexDirection: 'row',
  },
  sort: {
    flex: 2,
  },
  search: {
    flex: 4,
  },
  cardTitle: {
    marginVertical: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  cardDrop: {
    marginTop: 20,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '85%',
    color: 'black',
    paddingLeft: 15,
    marginHorizontal: 10,
    marginTop: 20,
  },
  cardButton: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
    borderColor: '#5F2EEA',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#5F2EEA',
    fontSize: 16,
  },
  cardButton2: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#5F2EEA',
    borderColor: '#5F2EEA',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    flex: 1,
    width: '50%',
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
});
