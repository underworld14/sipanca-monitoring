import React, { useCallback } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';

import useStore from '../../store';
import { InfoTable } from '../../components';
import assets from '../../../assets';
import styles from './styles';

const App = () => {
  const store = useStore();
  const currentLocation = store.locations.find((location) => location.id === store.currentLocation);

  console.log(currentLocation);

  useFocusEffect(
    useCallback(() => {
      store.getActualData();
    }, [])
  );

  return (
    <ImageBackground source={assets.bacgroundImg} style={styles.backgroundContainer}>
      <StatusBar style="light" translucent />
      <View style={styles.locationWraper}>
        <Ionicons name="location" size={24} />
        <Text style={styles.locationTitle}>{currentLocation?.nama}</Text>
      </View>
      <View style={styles.tempWraper}>
        <Text style={styles.tempTitle}>{store.actual?.suhu} </Text>
        <Text style={styles.celcius}>C°</Text>
      </View>
      <View style={styles.infoWraper}>
        <Text style={styles.infoTitle}>Currently</Text>
        <Text style={styles.infoSubtitle}>{dayjs(store.actual?.tanggal).format('dddd, DD MMM YYYY HH:mm')}</Text>
        <View style={styles.infoList}>
          <InfoTable
            title="Kelembapan"
            value={store.actual?.kelembapan}
            icon={<Image source={assets.humidity} style={styles.iconImg} />}
          />
          <InfoTable
            title="Intensitas Cahaya"
            value={store.actual?.intensitas_cahaya}
            icon={<Image source={assets.sun} style={styles.iconImg} />}
          />
        </View>
        <View style={styles.infoList}>
          <InfoTable
            title="Kualitas Udara"
            value={store.actual?.pm}
            icon={<Image source={assets.humidity} style={styles.iconImg} />}
          />
          <InfoTable
            title="Curah Hujan"
            value={store.actual?.curah_hujan}
            icon={<Image source={assets.rain} style={styles.iconImg} />}
          />
        </View>
        <View style={styles.infoList}>
          <InfoTable
            title="Kecepatan Angin"
            value={store.actual?.kecepatan_angin}
            icon={<Image source={assets.humidity} style={styles.iconImg} />}
          />
          <InfoTable
            title="Arah Angin"
            value={store.actual?.arah_angin}
            icon={<Image source={assets.compass} style={styles.iconImg} />}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;
