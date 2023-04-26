import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../constants/colors'
import ScreenHeader from '../components/shared/ScreenHeader'
import { FoodScreenRouteProps } from '../types/FoodScreenRouteProps'
import { StackNavigationProps } from '../types/StackNavigationProps';
import CustomButton from '../components/shared/CustomButton'
import { pb } from '../api/api'
import { Food } from '../types/Food'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps'


const FoodScreen = () => {
    const route = useRoute<FoodScreenRouteProps>();
    const navigation = useNavigation<StackNavigationProps>();

    const addFood = async (food: Food) => {
        const foodsString = await AsyncStorage.getItem('foods');
        const newFood: Food = await pb.collection('foods').create({
            name: food.name,
            icon: food.icon,
            energy: food.energy,
            quantity: food.quantity,
            meal_time: route.params.meal_time
        })

        if (foodsString != null) {
            const foods: Food[] = JSON.parse(foodsString);
            foods.push(newFood);

            await AsyncStorage.setItem('foods', JSON.stringify(foods))
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title={route.params.food.name}
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
            />
            <View style={styles.view}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: route.params.food.icon }} style={{ height: 150, width: '100%', resizeMode: 'contain' }} />
                </View>
                <CustomButton title='Ajouter' action={() => {
                    addFood(route.params.food).then(() => {
                        const mealScreenRoute = (navigation.getState()).routes.find((route) => route.name === "Meal") as MealScreenRouteProps

                        if (mealScreenRoute != null) {
                            navigation.navigate("Meal", {title: mealScreenRoute?.params.title, meal_time: mealScreenRoute?.params.meal_time});
                        }
                    })

                }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    view: {
        padding: 20,
        gap: 20,
    },
    imageContainer: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20
    }
})

export default FoodScreen