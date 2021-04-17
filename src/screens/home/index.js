import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { InfoTable } from '../../components';
import assets from '../../../assets';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} />
      <ImageBackground source={assets.bacgroundImg} style={styles.backgroundContainer}>
        <View style={styles.tempWraper}>
          <Text style={styles.tempTitle}>30C</Text>
        </View>
        <View style={styles.infoWraper}>
          <Text style={styles.infoTitle}>Currently</Text>
          <View style={styles.infoList}>
            <InfoTable
              title="Kelembapan"
              value="25"
              icon={<Image source={assets.humidity} style={styles.iconImg} />}
            />
            <InfoTable
              title="Intensitas Cahaya"
              value="25"
              icon={<Image source={assets.sun} style={styles.iconImg} />}
            />
          </View>
          <View style={styles.infoList}>
            <InfoTable
              title="Kualitas Udara"
              value="25"
              icon={<Image source={assets.humidity} style={styles.iconImg} />}
            />
            <InfoTable
              title="Curah Hujan"
              value="25"
              icon={<Image source={assets.rain} style={styles.iconImg} />}
            />
          </View>
          <View style={styles.infoList}>
            <InfoTable
              title="Kecepatan Angin"
              value="25"
              icon={<Image source={assets.humidity} style={styles.iconImg} />}
            />
            <InfoTable
              title="Arah Angin"
              value="25"
              icon={<Image source={assets.compass} style={styles.iconImg} />}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
