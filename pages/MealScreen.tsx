import { SafeAreaView, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '../constants/colors'

import ScreenHeader from '../components/shared/ScreenHeader'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps';
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'
import Meal from '../components/Journal/MealItem'
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
                    <Meal name="Skyr" kcal={73} weigth={135} icon='https://images.openfoodfacts.org/images/products/303/349/170/4642/front_fr.59.400.jpg' />
                    <Divider />
                    <Meal name="Flocons d'avoine" kcal={233} weigth={50} icon='https://images.openfoodfacts.org/images/products/322/982/001/9307/front_fr.194.400.jpg' />
                    <Divider />
                    <Meal name="Framboises" kcal={35} weigth={50} icon='https://assets.stickpng.com/images/580b57fcd9996e24bc43c19a.png' />
                </Section>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Ajouter un aliment' action={() => navigation.navigate("AddMeal")} />
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
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.gray,
        height: 35,
        borderRadius: 10,
        color: colors.white,
        paddingLeft: 7,
        paddingRight: 7,
        gap: 4
    },
    input: {
        flex: 1,
        color: colors.white
    },
    footer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealScreen