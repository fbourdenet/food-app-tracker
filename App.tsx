import { NavigationContainer } from '@react-navigation/native';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import StackNavigation from './navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';
import EventSource from 'react-native-sse'

import "./i18n.config";

global.EventSource = EventSource;

export default function App() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StatusBar style='light'></StatusBar>
        <StackNavigation />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}