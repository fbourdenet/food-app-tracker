import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../../types/StackNavigationProps'

type MealItemProps = {
    icon?: string,
    name: string,
    kcal: number,
    weigth: string
}

const MealItem = ({ icon, name, kcal, weigth }: MealItemProps) => {
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Food", {title: name})}>
            <View style={styles.container}>
                <Image
                    style={{ width: 40, height: 40, resizeMode: "contain", borderRadius: 5, backgroundColor: colors.white }}
                    source={{ uri: icon }}
                />
                <View style={styles.childContainer}>
                    <Text style={fonts.h4} numberOfLines={1}>{name}</Text>
                    <View style={styles.mealDescriptionContainer}>
                        <Text style={[fonts.h5, styles.kcal]}>{kcal} kcal</Text>
                        {weigth &&
                            <>
                                <Text style={[fonts.tiny, styles.separator]}>●</Text>
                                <Text style={fonts.h5}>{weigth}</Text>
                            </>
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    childContainer: {
        flex: 1,
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

export default MealItem