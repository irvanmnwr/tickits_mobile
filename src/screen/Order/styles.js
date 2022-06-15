import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#D6D8E7',
    height: 'auto',
  },
  indicatorImage: {
    resizeMode: 'stretch',
    marginHorizontal: 10,
  },
  cardTitle: {
    marginVertical: 20,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  containerSeat: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
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
  scheduleCard: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  scheduleCardImage: {
    resizeMode: 'stretch',
    margin: 10,
  },
  cinemaName: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  timeList: {
    padding: 1,
    paddingTop: 20,
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
  },
  time: {
    flex: 1,
    alignItems: 'flex-start',
  },
  timeText: {
    fontSize: 16,
    color: '#8692A6',
  },
  detailCard: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
  detail1: {
    flex: 1,
    alignItems: 'flex-start',
  },
  detail2: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  detailLeft: {
    fontSize: 18,
    color: '#8692A6',
  },
  detailRight: {
    fontSize: 18,
    color: 'black',
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
});
