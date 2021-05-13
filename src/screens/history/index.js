import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';

import assets from '../../../assets';
import useStore from '../../store';
import { InfoCard } from '../../components';
import Adapter from '../../service/Adapter';
import styles from './styles';

const Api = new Adapter();

const Index = () => {
  const store = useStore();
  const [date, setDate] = useState(store.actual.tanggal);
  const [current, setCurrent] = useState(store.actual);

  useFocusEffect(
    useCallback(() => {
      store.getActualData();
    }, [])
  );

  useEffect(() => {
    setDate(store.actual.tanggal);
  }, [store.actual.tanggal]);

  useEffect(() => {
    const fetchCurrent = async () => {
      const response = await Api.getHistory(store.currentLocation, date);
      setCurrent(response.data);
    };

    fetchCurrent();
  }, [date]);

  const updateDate = (type) => {
    if (type === 'tommorrow') {
      if (!dayjs(date).isAfter(store.dateState.last_date)) {
        setTimeout(() => {
          setDate((date) => dayjs(date).add(1, 'day'));
        }, 200);
      }
    }

    if (type === 'yesterday') {
      if (!dayjs(date).subtract(1, 'day').isBefore(store.dateState.first_date)) {
        setTimeout(() => {
          setDate((date) => dayjs(date).subtract(1, 'day'));
        }, 200);
      }
    }
  };

  return (
    <ImageBackground style={styles.backgroundContainer} source={assets.bacgroundImg}>
      <StatusBar style="light" translucent />
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
        <View style={styles.dateChanger}>
          <TouchableOpacity onPress={() => updateDate('yesterday')}>
            <AntDesign name="caretleft" size={26} style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <Text style={styles.date}>{dayjs(date).format('dddd, DD-MM-YYYY')}</Text>
          <TouchableOpacity onPress={() => updateDate('tommorrow')}>
            <AntDesign name="caretright" size={26} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <InfoCard icon={assets.humidity} title="Kelembapan" value={current?.kelembapan} />
        <InfoCard icon={assets.sun} title="Intensitas Cahaya" value={current?.intensitas_cahaya} />
        <InfoCard icon={assets.wind} title="Kualitas Udara" value={current?.pm} />
        <InfoCard icon={assets.rain} title="Curah Hujan" value={current?.curah_hujan} />
        <InfoCard icon={assets.wind} title="Kecepatan Angin" value={current?.kecepatan_angin} />
        <InfoCard icon={assets.compass} title="Arah Angin" value={current?.arah_angin} />
      </View>
    </ImageBackground>
  );
};

export default Index;
