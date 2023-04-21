import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import React from 'react'

import BottomTabNavigation from './BottomTabNavigation'
import AddMealScreen from '../pages/AddMealScreen'
import ScanScreen from '../pages/ScanScreen'
import MealScreen from "../pages/MealScreen";

export type StackNavigationParamList = {
    AddMeal: undefined,
    Meal: {
        title: string
    },
    BottomTabNavigation: undefined,
    Scan: undefined
}

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
            <Stack.Screen name="Meal" component={MealScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation