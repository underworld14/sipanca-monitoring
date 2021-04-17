import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { wp, hp, fs } from './responsive';

const InfoTable = ({ style, title, value, icon }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconWraper}>{icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

InfoTable.defaultProps = {
  style: {
    width: wp(48),
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    opacity: 0.8,
    elevation: 2,
  },
  iconWraper: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: '300',
  },
  value: {
    marginTop: hp(1),
    fontSize: fs(18),
    fontWeight: 'bold',
  },
});

export default InfoTable;
