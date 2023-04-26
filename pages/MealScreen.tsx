import { SafeAreaView, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '../constants/colors'

import ScreenHeader from '../components/shared/ScreenHeader'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps';
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'
import FoodItem from '../components/Journal/FoodItem'
import Divider from '../components/shared/Divider'
import CustomButton from '../components/shared/CustomButton'

const MealScreen = () => {
    const route = useRoute<MealScreenRouteProps>();
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title={route.params.title}
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
            />
            <View style={styles.view}>
                <Section>
                    <FoodItem food={{icon: "https://images.openfoodfacts.org/images/products/303/349/170/4642/front_fr.59.400.jpg", name: "Skyr", energy: {value: 50, unit: "kcal"}, quantity: 500}} />
                    <Divider />
                    <FoodItem food={{icon: "https://images.openfoodfacts.org/images/products/303/349/170/4642/front_fr.59.400.jpg", name: "Skyr", energy: {value: 50, unit: "kcal"}, quantity: 500}} />
                    <Divider />
                    <FoodItem food={{icon: "https://images.openfoodfacts.org/images/products/303/349/170/4642/front_fr.59.400.jpg", name: "Skyr", energy: {value: 50, unit: "kcal"}, quantity: 500}} />
                </Section>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Ajouter un aliment' action={() => navigation.navigate("AddFood")} />
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
        gap: 20
    },
    footer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealScreen