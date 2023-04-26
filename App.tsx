import { NavigationContainer } from '@react-navigation/native';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import StackNavigation from './navigation/StackNavigation';
import { StatusBar } from 'expo-status-bar';

import "./i18n.config";


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