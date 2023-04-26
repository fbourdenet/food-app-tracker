import { SafeAreaView, View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '../constants/colors'

import ScreenHeader from '../components/shared/ScreenHeader'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps';
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'
import FoodItem from '../components/Journal/FoodItem'
import Divider from '../components/shared/Divider'
import CustomButton from '../components/shared/CustomButton'
import { Food } from '../types/Food'
import { pb } from '../api/api'


const MealScreen = () => {
    const route = useRoute<MealScreenRouteProps>();
    const navigation = useNavigation<StackNavigationProps>();

    const [foods, setFoods] = useState<Food[]>([]);

    useEffect(() => {
        pb.collection('foods').getFullList<Food>({
            filter: 'meal_time = "' + route.params.meal_time + '"'
        }).then((results) => {
            setFoods(results)
        });

        pb.collection('foods').subscribe<Food>('*', ({ record: food }) => {
            setFoods([...foods, {...food}]);
        })

        return () => {
            //create function in api
            console.log("unsubscribing")
            pb.collection('foods').unsubscribe();
        }
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title={route.params.title}
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
            />
            <View style={styles.view}>
                {foods && foods.length !== 0 &&
                    <Section>
                        {
                            foods.map((food, index) => {
                                return (
                                    <React.Fragment key={food.id}>
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
            <View style={styles.footer}>
                <CustomButton title='Ajouter un aliment' action={() => navigation.navigate("AddFood", {meal_time: route.params.meal_time})} />
            </View>
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