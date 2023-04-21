import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors'

type SectionProfileItemProps = {
    title: string,
    value: string,
}

const SectionProfileItem = ({ title, value }: SectionProfileItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={fonts.h4}>{title}</Text>
            <Text style={fonts.h5}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 20
    },
})

export default SectionProfileItem