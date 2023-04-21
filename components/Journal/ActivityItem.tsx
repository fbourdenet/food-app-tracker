import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors'

type ActivityItemProps = {
    icon?: string,
    name: string,
    kcal: number,
    weigth: number
}

const ActivityItem = ({ icon = "💪", name, kcal, weigth }: ActivityItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={fonts.icon}>{icon}</Text>
            <View style={styles.childContainer}>
                <Text style={fonts.h4}>{name}</Text>
                <View style={styles.mealDescriptionContainer}>
                    <Text style={[fonts.h5, styles.kcal]}>{kcal} kcal</Text>
                    {/* <Text style={[fonts.tiny, styles.separator]}>●</Text>
                    <Text style={fonts.h5}>{weigth} g</Text> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    childContainer: {
        gap: 2
    },
    mealDescriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7
    },
    kcal: {
        color: colors.lightgray
    },
    separator: {
        color: colors.lightgray
    },
    icon: {
        height: 50,
        width: 50
    }
})

export default ActivityItem