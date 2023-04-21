import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import Header from '../components/shared/Header'

import { colors } from '../constants/colors'
import Section from '../components/shared/Section'
import ProfileItem from '../components/Profile/ProfileItem'
import Divider from '../components/shared/Divider'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <Header title="Profil" icon='cog' />
        <Section>
          <ProfileItem title='Nom' value='Florian' />
          <Divider />
          <ProfileItem title='Âge' value='22 ans' />
          <Divider />
          <ProfileItem title='Poids' value='77 kg' />
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