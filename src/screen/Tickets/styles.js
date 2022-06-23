import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    backgroundColor: '#D6D8E7',
    height: 'auto',
  },
  scheduleCard: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    padding: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  scheduleCard2: {
    backgroundColor: 'white',
    width: '100%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
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
    marginVertical: 3,
    marginBottom: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  detailGenre: {
    fontSize: 14,
    color: '#8692A6',
  },
  payment: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#8692A6',
    borderRadius: 10,
  },
});
