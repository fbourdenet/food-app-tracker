import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import Header from '../components/Header'

import { colors } from '../constants/colors'
import Section from '../components/Section'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <Header title="Profil" icon='cog'/>
        <Section title='Poids'>
          
        </Section>
        <Section title='IMC'>

        </Section>
        <Section title='Récap hebdomadaire'>

        </Section>
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
})

export default ProfileScreen