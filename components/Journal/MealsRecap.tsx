import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../../types/StackNavigationProps';

type MealRecapProps = {
    icon: string,
    title: string,
    kcal: number
}

const MealsRecap = ({ icon, title, kcal }: MealRecapProps) => {
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Meal", {title: title})}>
            <View style={styles.mealContainer}>
                <View style={styles.mealLeftContainer}>
                    <Text style={fonts.icon}>{icon}</Text>
                    <View style={styles.mealDescriptionContainer}>
                        <Text style={fonts.h4}>{title}</Text>
                        <Text style={fonts.h5}>{kcal} kcal</Text>
                    </View>
                </View>

                <MaterialCommunityIcons name='chevron-right' size={30} color={colors.lightgray}></MaterialCommunityIcons>
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