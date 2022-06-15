import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#D6D8E7',
    height: 'auto',
  },
  containerSeat: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  cardTitle: {
    marginVertical: 20,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
  priceTag: {
    flex: 1,
    alignItems: 'flex-start',
  },
  priceTag2: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5F2EEA',
  },
  scheduleCard: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    paddingBottom: 40,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  detailLeft: {
    fontSize: 18,
    color: '#8692A6',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderColor: '#8692A6',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
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
