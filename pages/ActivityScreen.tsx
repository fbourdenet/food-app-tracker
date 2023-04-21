import { SafeAreaView, View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '../constants/colors'

import ScreenHeader from '../components/shared/ScreenHeader'
import { MealScreenRouteProps } from '../types/MealScreenRouteProps';
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'
import CustomButton from '../components/shared/CustomButton'
import ActivityItem from '../components/Journal/ActivityItem'

const ActivityScreen = () => {
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
                    <ActivityItem name="Musculation" kcal={73} weigth={135} />
                </Section>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Ajouter une activité' action={() => navigation.navigate("AddActivity")} />
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

export default ActivityScreen