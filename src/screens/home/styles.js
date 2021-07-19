import { StyleSheet } from 'react-native';
import { responsive } from '../../components';
import { fonts } from '../../constants';

const { wp, hp, fs } = responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
  },
  locationWraper: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  locationTitle: {
    marginLeft: wp(2),
    fontSize: fs(16),
    fontFamily: fonts.Poppins_600SemiBold,
  },
  tempWraper: {
    flex: 0.5,
    alignItems: 'center',
    paddingHorizontal: wp(10),
    flexDirection: 'row',
  },
  infoWraper: {
    flex: 1.4,
  },
  tempTitle: {
    fontSize: fs(72),
    fontFamily: fonts.Poppins_600SemiBold,
  },
  celcius: {
    fontSize: fs(30),
    fontFamily: fonts.Poppins_400Regular,
    marginTop: hp(-8),
  },
  infoTitle: {
    fontSize: fs(32),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: hp(1),
    fontFamily: fonts.Poppins_300Light,
  },
  infoSubtitle: {
    fontSize: fs(18),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: hp(4),
    fontFamily: fonts.Poppins_300Light,
  },
  infoList: {
    marginBottom: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconImg: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default styles;
