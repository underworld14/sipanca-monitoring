import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { hp, fs } from './responsive';

/**
 * Info Card Element
 *
 * @param props
 * @param {object} props.icon
 * @param {string} props.title
 * @param {string} props.value
 * @param {object} props.containerStyle
 */
const InfoCard = ({ icon, title, value, containerStyle }) => {
  return (
    <View style={[styles.statusInfoContainer, containerStyle]}>
      <View style={styles.iconInfo}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.titleInfo}>
        <Text> {title} </Text>
      </View>
      <View style={styles.valueInfo}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusInfoContainer: {
    height: hp(8),
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#ffff',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  iconInfo: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  titleInfo: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueInfo: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: fs(18),
  },
});

export default InfoCard;
