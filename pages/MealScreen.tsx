import { SafeAreaView, View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '../constants/colors'

import ScreenHeader from '../components/shared/ScreenHeader'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps';
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'
import FoodItem from '../components/Journal/FoodItem'
import Divider from '../components/shared/Divider'
import CustomButton from '../components/shared/CustomButton'
import { Food } from '../types/Food'
import AsyncStorage from '@react-native-async-storage/async-storage'


const MealScreen = () => {
    const route = useRoute<MealScreenRouteProps>();
    const navigation = useNavigation<StackNavigationProps>();
    const [foods, setFoods] = useState<Food[]>([]);

    const getFoodsStorageData = async () => {
        const value = await AsyncStorage.getItem('foods');

        if (value !== null) {
            const foods: Food[] = JSON.parse(value);
            const foodsByMealTime: Food[] = foods.filter((food) => food.meal_time === route.params.meal_time);

            setFoods(foodsByMealTime);
        }
    }

    useEffect(() => {
        getFoodsStorageData();
    }, []);

    useFocusEffect(useCallback(() => {
        console.log("is focused")
        getFoodsStorageData()
    }, [navigation]));

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title={route.params.title}
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
            />
            <ScrollView>
                <View style={styles.view}>
                    {foods && foods.length !== 0 &&
                        <Section>
                            {
                                foods.map((food, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <FoodItem food={food} meal_time={route.params.meal_time} />
                                            {index !== foods.length - 1 &&
                                                <Divider />
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }
                        </Section>
                    }
                </View>
                <CustomButton title='Ajouter un aliment' action={() => navigation.navigate("AddFood", { meal_time: route.params.meal_time })} />
            </ScrollView>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    view: {
        padding: 20,
        gap: 20
    },
    noFoodsText: {
        textAlign: 'center'
    },
    footer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealScreen