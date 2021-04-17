import { StyleSheet } from 'react-native';
import { responsive } from '../../components';

const { wp, hp, fs } = responsive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
  },
  tempWraper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(10),
  },
  infoWraper: {
    flex: 1,
  },
  tempTitle: {
    fontSize: fs(72),
    fontWeight: 'bold',
  },
  infoTitle: {
    fontSize: fs(32),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: hp(4),
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
