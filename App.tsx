import { NavigationContainer } from '@react-navigation/native';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import StackNavigation from './navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';
import EventSource from 'react-native-sse'

import "./i18n.config";
import { useEffect } from 'react';
import { pb } from './api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Food } from './types/Food';

global.EventSource = EventSource;

export default function App() {

  useEffect(() => {
    const storeDatabaseData = async (foods: Food[]) => {
      await AsyncStorage.setItem('foods', JSON.stringify(foods))
    }
    
    pb.collection('foods').getFullList<Food>().then((foods) => {
      storeDatabaseData(foods)
    })
  }, [])
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StatusBar style='light'></StatusBar>
        <StackNavigation />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}