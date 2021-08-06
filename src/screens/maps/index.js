import React, { useRef, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';

import useStore from '../../store';
import styles from './styles';

export default function App() {
  const _map = useRef(null);
  const store = useStore();
  const currentLocation = store.locations.find((location) => location.id === store.currentLocation);

  useEffect(() => {
    if (_map.current) {
      _map.current.setCamera(
        {
          center: {
            latitude: Number(currentLocation.kordinat.latitude),
            longitude: Number(currentLocation.kordinat.longtitude),
          },
          zoom: 15,
        },
        5000
      );
    }
  }, [currentLocation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent />
      <MapView ref={_map} style={styles.map}>
        {store.locations.map((location, i) => (
          <Marker
            key={i}
            title={location.nama}
            coordinate={{
              latitude: Number(location.kordinat.latitude),
              longitude: Number(location.kordinat.longtitude),
            }}
          />
        ))}
      </MapView>
      <View style={styles.banner}>
        <Text style={styles.currentTitle}> Current Location : </Text>
        <Text style={styles.currentPlace}> {currentLocation.nama} </Text>
        <Text style={styles.currentCoordinate}>
          {`Lat: ${currentLocation.kordinat.latitude} | Long: ${currentLocation.kordinat.longtitude}`}{' '}
        </Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={{ width: '100%', height: 30 }}
            selectedValue={store.currentLocation}
            onValueChange={(value) => store.setLocation(value)}
          >
            {store.locations.map((location, i) => (
              <Picker.Item key={i} label={location.nama} value={location.id} />
            ))}
          </Picker>
        </View>
      </View>
    </SafeAreaView>
  );
}
