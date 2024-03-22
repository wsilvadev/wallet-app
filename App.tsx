import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, Platform } from "react-native";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import { COLORS } from "./src/styles/theme";
import Login from "./src/screens/Login";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });
  useEffect(() => {
    async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.error(e);
      }
    };
  }, []);
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}>
      <ThemeProvider theme={COLORS}>
        <StatusBar style="dark" backgroundColor="transparent" translucent />
        <Login />
      </ThemeProvider>
    </SafeAreaView>
  );
}
