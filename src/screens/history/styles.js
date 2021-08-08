import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';
import { responsive } from '../../components';
import { hp } from '../../components/responsive';

const { wp, fs } = responsive;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  locationWraper: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationTitle: {
    marginLeft: wp(2),
    fontSize: fs(16),
    fontFamily: fonts.Poppins_600SemiBold,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: fs(24),
    fontFamily: fonts.Poppins_600SemiBold,
  },
  dateChanger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  dateWraper: {
    flexDirection: 'column',
  },
  date: {
    textAlign: 'center',
    fontSize: fs(18),
    fontFamily: fonts.Poppins_400Regular,
  },
  minutes: {
    textAlign: 'center',
    fontSize: fs(16),
    fontFamily: fonts.Poppins_400Regular,
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: wp(6),
  },
});

export default styles;
