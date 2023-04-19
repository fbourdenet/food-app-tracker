import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import Section from '../components/Section'
import NutrientsRecap from '../components/NutrientsRecap'
import CaloriesRecap from '../components/CaloriesRecap'
import MealsRecap from '../components/MealsRecap'

import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors'

type Props = {}

const JournalScreen = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                <View style={styles.view}>
                    <Text style={fonts.h1}>Aujourd'hui</Text>
                    <CaloriesRecap />
                    <Section title='Nutriments' children={<NutrientsRecap />}></Section>
                    <Section title='Alimentation'>
                        <MealsRecap icon="☕️" title="Petit Déjeuner" kcal={200} />
                        <MealsRecap icon="🥗" title="Déjeuner" kcal={500} />
                        <MealsRecap icon="🍲" title="Diner" kcal={700} />
                        <MealsRecap icon="🍎" title="En-cas" kcal={150} />
                    </Section>
                    <Section title='Activités'>
                        <MealsRecap icon="💪" title="Sport" kcal={200} />
                    </Section>                
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default JournalScreen

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background
    },
    view: {
        padding: 20,
        gap: 20
    }
})