import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { fonts } from '../constants/fonts'
import { colors } from '../constants/colors'

type MealProps = {
    icon?: string,
    name: string,
    kcal: number,
    weigth: number
}

const Meal = ({ icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png", name, kcal, weigth }: MealProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={{width: 30, height: 30, resizeMode: "contain", borderRadius: 5, backgroundColor: colors.white}}
                source={{uri: icon}}
            />
            <View style={styles.childContainer}>
                <Text style={fonts.h4}>{name}</Text>
                <View style={styles.mealDescriptionContainer}>
                    <Text style={[fonts.h5, styles.kcal]}>{kcal} kcal</Text>
                    <Text style={[fonts.tiny, styles.separator]}>●</Text>
                    <Text style={fonts.h5}>{weigth} g</Text>
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
        color: colors.green
    },
    separator: {
        color: colors.lightgray
    },
    icon: {
        height: 50,
        width: 50
    }
})

export default Meal