import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors';

type MealRecapProps = {
    icon: string,
    title: string,
    kcal: number
}

const MealsRecap = ({ icon, title, kcal }: MealRecapProps) => {
    return (
        <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
            <View style={styles.mealContainer}>
                <View style={styles.mealLeftContainer}>
                    <Text style={fonts.icon}>{icon}</Text>
                    <View style={styles.mealDescriptionContainer}>
                        <Text style={fonts.h4}>{title}</Text>
                        <Text style={fonts.h5}>{kcal} kcal</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => console.log("pressed2")}>
                    <MaterialCommunityIcons name='plus-circle-outline' size={24} color={colors.lightgray}></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
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