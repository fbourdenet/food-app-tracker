import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { fonts } from '../../constants/fonts'
import { colors } from '../../constants/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../../types/StackNavigationProps'
import { Food } from "../../types/Food"

type FoodItemProps = {
    food: Food
}

const FoodItem = ({ food }: FoodItemProps) => {
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Food", { title: food.name })}>
            <View style={styles.container}>
                <Image
                    style={{ width: 40, height: 40, resizeMode: "contain", borderRadius: 5, backgroundColor: colors.white }}
                    source={{ uri: food.icon }}
                />
                <View style={styles.childContainer}>
                    <Text style={fonts.h4} numberOfLines={1}>{food.name}</Text>
                    <View style={styles.mealDescriptionContainer}>
                        {food.energy.value &&
                            <Text style={[fonts.h5, styles.kcal]}>{food.energy.value} {food.energy.unit}</Text>
                        }

                        {food.energy.value && food.quantity &&
                            <Text style={[fonts.tiny, styles.separator]}>●</Text>

                        }

                        {food.quantity &&
                            <Text style={fonts.h5}>{food.quantity} g</Text>
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
        gap: 4
    },
    mealDescriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
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

export default FoodItem