import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import React from 'react'

import BottomTabNavigation from './BottomTabNavigation'
import AddMealScreen from '../pages/AddMealScreen'
import ScanScreen from '../pages/ScanScreen'
import MealScreen from "../pages/MealScreen";
import AddActivityScreen from "../pages/AddActivityScreen";
import ActivityScreen from "../pages/ActivityScreen";

export type StackNavigationParamList = {
    AddMeal: undefined,
    AddActivity: undefined,
    Activity: {
        title: string
    },
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
            <Stack.Screen name="AddActivity" component={AddActivityScreen} />
            <Stack.Screen name="Activity" component={ActivityScreen} />
            <Stack.Screen name="Meal" component={MealScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation