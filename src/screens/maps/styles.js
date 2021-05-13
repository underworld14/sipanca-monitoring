import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../constants';
import { responsive } from '../../components';

const { wp, hp, fs } = responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  map: {
    flex: 3.5,
    width: Dimensions.get('window').width,
  },
  banner: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -5,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    elevation: 4,
  },
  currentTitle: {
    fontFamily: fonts.Poppins_400Regular,
    fontSize: fs(16),
  },
  currentPlace: {
    fontFamily: fonts.Poppins_600SemiBold,
    fontSize: fs(20),
  },
  currentCoordinate: {
    fontFamily: fonts.Poppins_400Regular,
    fontSize: fs(10),
  },
  pickerContainer: {
    marginTop: hp(2),
    width: '100%',
  },
});

export default styles;
