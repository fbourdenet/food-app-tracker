import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors';

type HeaderProps = {
    title?: string,
    // TODO : Left icon and right icon {icon, action}
    icon?: "calendar-range" | "cog",
    action?: Function
}

const Header = ({title = "Aujourd'hui", icon, action}: HeaderProps) => {

    return (
        <View style={styles.container}>
            <Text style={fonts.h1}>{title}</Text>
            <MaterialCommunityIcons name={icon} size={30} color={colors.green} onPress={() => action && action()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})