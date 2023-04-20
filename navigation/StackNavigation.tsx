import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react'

import AddMealScreen from '../pages/AddMealScreen'
import BottomTabNavigation from './BottomTabNavigation'

type StackNavigationParamList = {
    AddMeal: undefined,
    BottomTabNavigation: undefined
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
        </Stack.Navigator>
    )
}

export default StackNavigation