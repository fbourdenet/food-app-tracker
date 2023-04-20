import { NavigationContainer } from '@react-navigation/native';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import BottomTabNavigation from './navigation/BottomTabNavigation';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}