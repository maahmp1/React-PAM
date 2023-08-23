import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import {  StatusBar, SafeAreaView } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })

  if(!fonteCarregada){
    return null;
  }
  return (
    <SafeAreaView >
      <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}

