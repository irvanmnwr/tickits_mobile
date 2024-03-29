import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 500,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: 200,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  cardImage: {
    width: 160,
    height: 280,
  },
  cardTitle: {
    marginVertical: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  cardGenre: {
    fontSize: 18,
    color: '#8692A6',
  },
  detailContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
  },
  detailCard: {
    flex: 1,
    alignItems: 'flex-start',
  },
  detailTitle: {
    marginVertical: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  detailGenre: {
    fontSize: 14,
    color: '#8692A6',
  },
  sinopsisContainer: {
    paddingHorizontal: 20,
    height: 'auto',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  sinopsisTitle: {
    marginVertical: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  sinopsisGenre: {
    fontSize: 16,
    color: '#8692A6',
    textAlign: 'justify',
  },
  cardButton: {
    marginTop: 20,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 30,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
  scheduleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#D6D8E7',
  },
});
