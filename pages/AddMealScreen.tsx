import { SafeAreaView, View, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../constants/colors'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/shared/ScreenHeader'
import { StackNavigationProps } from '../types/StackNavigationProps';
import { Product } from '../types/OpenFoodFacts';
import MealItem from '../components/Journal/MealItem'
import Section from '../components/shared/Section';
import Divider from '../components/shared/Divider';
import { getProductsByName } from '../api/api';

const AddMealScreen = () => {
    const [meals, setMeals] = useState<Product[] | null>(null);
    const [meal, setMeal] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<StackNavigationProps>();

    const getProducts = async (name: string) => {
        setLoading(true);

        let products: Product[] = await getProductsByName(name);
        setMeals(products);
        
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title='Ajouter un aliment'
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
                rightIcon={{ name: "qrcode-scan", action: () => navigation.navigate("Scan") }}
            />
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons color={colors.lightgray} name='magnify' size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setMeal(value)}
                        value={meal}
                        placeholder="Votre aliment..."
                        autoCorrect={false}
                        keyboardAppearance='dark'
                        placeholderTextColor={colors.lightgray}
                        onSubmitEditing={(e) => getProducts(e.nativeEvent.text)}
                    />
                    {meal.length > 0 &&
                        <TouchableWithoutFeedback onPress={() => setMeal("")}>
                            <MaterialCommunityIcons color={colors.lightgray} name='close-circle' size={20} />
                        </TouchableWithoutFeedback>
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading &&
                        <ActivityIndicator size="small" color={colors.lightgray} />
                    }
                    {meals && !loading &&
                        <Section>
                            {
                                meals.map((meal, index) => {
                                    return (
                                        <React.Fragment key={meal._id}>
                                            <MealItem icon={meal.selected_images.front.small.fr} name={meal.product_name} kcal={meal.nutriments.energy} weigth={meal.quantity} />
                                            {meals.length - 1 !== index &&
                                                <Divider />
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }
                        </Section>
                    }
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    view: {
        padding: 20,
        gap: 20
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.gray,
        height: 35,
        borderRadius: 10,
        color: colors.white,
        paddingLeft: 7,
        paddingRight: 7,
        gap: 4
    },
    input: {
        flex: 1,
        color: colors.white,
    }
})

export default AddMealScreen