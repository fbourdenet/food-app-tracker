import { View, Text } from 'react-native'
import React from 'react'

import Header from '../components/Header'

type MealScreenProps = {
    meal: string
}

const MealScreen = ({meal}: MealScreenProps) => {
  return (
    <View>
      <Header title={meal} />
    </View>
  )
}

export default MealScreen