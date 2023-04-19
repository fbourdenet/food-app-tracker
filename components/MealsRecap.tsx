import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../constants/fonts'

type MealRecapProps = {
    icon: string,
    title: string,
    kcal: number
}

const MealsRecap = ({ icon, title, kcal }: MealRecapProps) => {
    return (
        <View style={styles.mealContainer}>
            <View style={styles.mealLeftContainer}>
                <Text style={fonts.icon}>{icon}</Text>
                <View style={styles.mealDescriptionContainer}>
                    <Text style={fonts.h4}>{title}</Text>
                    <Text>{kcal} kcal</Text>
                </View>
            </View>

            <TouchableOpacity>
                <MaterialCommunityIcons name='plus' size={30}></MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    )
}

export default MealsRecap

const styles = StyleSheet.create({
    mealContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mealLeftContainer: {
        flexDirection: "row",
        gap: 20,
    },
    mealDescriptionContainer: {
        gap: 2
    }
});