import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import BottomTabNavigation from './navigation/BottomTabNavigation';

export default function App() {
  return (
    <BottomSheetModalProvider>
      <BottomTabNavigation />
    </BottomSheetModalProvider>
  );
}