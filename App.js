import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import Navigation from './src';
import useStore from './src/store';
import theme from './src/theme/index';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

dayjs.locale('id');

export default function App() {
  const [stateReady, setStateReady] = useState(false);
  const store = useStore();
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    const fetchStateData = async () => {
      await Promise.all([store.getDateState(), store.getActualData(), store.getLocationData()]);
      setStateReady(true);
    };

    fetchStateData();
  }, []);

  if (!fontsLoaded || !stateReady) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
