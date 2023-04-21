import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../utils/utils';

type HeaderProps = {
    title?: string,
    icon?: "calendar-range" | "cog-outline",
    action?: Function
}

const Header = ({title = "Aujourd'hui", icon, action}: HeaderProps) => {
    const { t } = useTranslation(); 

    return (
        <View style={styles.container}>
            <Text style={fonts.h1}>{capitalize(t(title))}</Text>
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