import { View, StyleSheet } from 'react-native'
import React from 'react'

import { colors } from '../../constants/colors'

type Props = {}

const Divider = (props: Props) => {
  return (
    <View style={styles.container}></View>
  )
}

export default Divider

const styles = StyleSheet.create({
    container: {
        borderColor: colors.gray,
        borderWidth: 0.5,
        borderRadius: 50
    }
})