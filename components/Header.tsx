import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors';

type HeaderProps = {
    icon: "calendar-range",
    action: Function
}

const Header = ({icon, action}: HeaderProps) => {

    return (
        <View style={styles.container}>
            <Text style={fonts.h1}>Aujourd'hui</Text>
            <MaterialCommunityIcons name={icon} size={30} color={colors.green} onPress={() => action()} />
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