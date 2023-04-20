import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react'

import BottomTabNavigation from './BottomTabNavigation'
import AddMealScreen from '../pages/AddMealScreen'
import ScanScreen from '../pages/ScanScreen'

type StackNavigationParamList = {
    AddMeal: undefined,
    BottomTabNavigation: undefined,
    Scan: undefined
}

export type StackNavigationProps = NativeStackNavigationProp<StackNavigationParamList>

const Stack = createNativeStackNavigator<StackNavigationParamList>();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
            <Stack.Screen name="AddMeal" component={AddMealScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation