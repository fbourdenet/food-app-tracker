import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState, useEffect } from 'react'
import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '../../types/StackNavigationProps';
import { pb } from '../../api/api';
import { Food } from '../../types/Food';
import AsyncStorage from '@react-native-async-storage/async-storage';



type MealRecapProps = {
    icon: string,
    title: string,
    meal_time: string
}

const MealsRecap = ({ icon, title, meal_time }: MealRecapProps) => {
    const navigation = useNavigation<StackNavigationProps>();
    const [totalCalories, setTotalCalories] = useState(0);

    const computeTotalCalories = (foods: Food[]) => {
        let tmp = 0;
        foods?.map((food) => {
            tmp += food.energy.value
        })

        setTotalCalories(tmp);
    }

    const getFoodsStorageData = async () => {
        const value = await AsyncStorage.getItem('foods');

        if (value !== null) {
            const foods: Food[] = JSON.parse(value);
            const foodsByMealTime: Food[] = foods.filter((food) => food.meal_time === meal_time);

            computeTotalCalories(foodsByMealTime);
        }
    }

    useEffect(() => {
        getFoodsStorageData();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFoodsStorageData()
        });

        return unsubscribe;
    }, [navigation]);


    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Meal", { title: title, meal_time: meal_time })}>
            <View style={styles.mealContainer}>
                <View style={styles.mealLeftContainer}>
                    <Text style={fonts.icon}>{icon}</Text>
                    <View style={styles.mealDescriptionContainer}>
                        <Text style={fonts.h4}>{title}</Text>
                        <Text style={fonts.h5}>{totalCalories} kcal</Text>
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