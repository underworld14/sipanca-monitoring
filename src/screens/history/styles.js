import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';
import { responsive } from '../../components';

const { wp, fs } = responsive;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    paddingHorizontal: wp(6),
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
  },
  date: {
    textAlign: 'center',
    fontSize: fs(18),
    fontFamily: fonts.Poppins_400Regular,
  },
  content: {
    flex: 4,
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
});

export default styles;
