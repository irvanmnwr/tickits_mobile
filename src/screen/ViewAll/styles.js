import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  bottomText: {
    color: '#5F2EEA',
    fontSize: 18,
    marginLeft: '33%',
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
    width: '50%',
    padding: 5,
    alignItems: 'center',
    elevation: 2,
    marginHorizontal: 1,
  },
});
