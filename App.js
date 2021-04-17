import React from "react";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src";
import theme from "./src/theme/index";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
