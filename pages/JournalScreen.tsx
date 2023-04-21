import { View, Text, SafeAreaView, ScrollView, StyleSheet, } from 'react-native'
import React, { useRef } from 'react'

import Section from '../components/shared/Section'
import NutrientsRecap from '../components/Journal/NutrientsRecap'
import CaloriesRecap from '../components/Journal/CaloriesRecap'
import MealsRecap from '../components/Journal/MealsRecap'
import Divider from '../components/shared/Divider'
import Header from '../components/shared/Header'
import CustomBottomSheet from '../components/shared/CustomBottomSheet'

import { colors } from '../constants/colors'
import {BottomSheetModal} from '@gorhom/bottom-sheet'
import CustomDatePicker from '../components/shared/CustomDatePicker'

const JournalScreen = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handleBottomSheetPress = () => {
        bottomSheetModalRef?.current?.present();
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <View style={styles.view}>
                    <Header title="TODAY" icon="calendar-range" action={handleBottomSheetPress} />
                    <CaloriesRecap />
                    <Section title='Nutriments' children={<NutrientsRecap />}></Section>
                    <Section title='Alimentation'>
                        <MealsRecap icon="☕️" title="Petit Déjeuner" kcal={200} />
                        <Divider />
                        <MealsRecap icon="🥗" title="Déjeuner" kcal={500} />
                        <Divider />
                        <MealsRecap icon="🍲" title="Diner" kcal={700} />
                        <Divider />
                        <MealsRecap icon="🍎" title="En-cas" kcal={150} />
                    </Section>
                    <Section title='Activités'>
                        <MealsRecap icon="💪" title="Sport" kcal={200} />
                    </Section>
                    <CustomBottomSheet reference={bottomSheetModalRef}>
                        <CustomDatePicker></CustomDatePicker>
                    </CustomBottomSheet>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default JournalScreen

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    view: {
        padding: 20,
        gap: 20
    },
})