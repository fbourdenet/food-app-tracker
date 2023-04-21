import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'
import { Icon } from '../types/Icon';

type ScreenHeaderProps = {
    title?: string,
    leftIcon?: Icon,
    rightIcon?: Icon,
}

const ScreenHeader = ({ title = "Aujourd'hui", leftIcon, rightIcon }: ScreenHeaderProps) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.leftIcon} name={leftIcon?.name} size={40} color={leftIcon?.color ? leftIcon.color : colors.green} onPress={() => leftIcon?.action && leftIcon.action()} />
            <Text style={fonts.h4} adjustsFontSizeToFit={true}>{title}</Text>
            <MaterialCommunityIcons style={styles.rightIcon} name={rightIcon?.name} size={26} color={colors.green} onPress={() => rightIcon?.action && rightIcon.action()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
    },
    leftIcon: {
        position: "absolute",
        left: 10,
        top: 2
    },
    rightIcon: {
        position: "absolute",
        right: 20,
        top: 10
    },
})

export default ScreenHeader