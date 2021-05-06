import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import assets from '../../../assets';
import { responsive, InfoCard } from '../../components';

const { wp, hp, fs } = responsive;

const Index = () => {
  return (
    <ImageBackground style={styles.backgroundContainer} source={assets.bacgroundImg}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.content}>
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
        <InfoCard icon={assets.humidity} title="Kelembapan" value="26 %" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingHorizontal: wp(6),
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fs(24),
  },
  content: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(6),
  },
});

export default Index;
