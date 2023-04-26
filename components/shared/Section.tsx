import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

import { colors } from '../../constants/colors'
import { fonts } from '../../constants/fonts'

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <View style={styles.container}>
            {title &&
                <Text style={fonts.h2}>{title}</Text>
            }
            {children &&
                <View style={styles.subContainer}>
                    {children}
                </View>
            }
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    subContainer: {
        backgroundColor: colors.darkgray,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        gap: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});