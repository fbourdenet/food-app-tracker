import { SafeAreaView, View, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../constants/colors'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/shared/ScreenHeader'
import { StackNavigationProps } from '../types/StackNavigationProps';
import { OpenFoodFacts } from '../types/OpenFoodFacts';
import FoodItem from '../components/Journal/FoodItem'
import Section from '../components/shared/Section';
import Divider from '../components/shared/Divider';
import { getProductsByName } from '../api/api';

const AddMealScreen = () => {
    const [foods, setFoods] = useState<OpenFoodFacts[] | null>(null);
    const [food, setFood] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<StackNavigationProps>();

    const getProducts = async (name: string) => {
        setLoading(true);

        let foods: OpenFoodFacts[] = await getProductsByName(name);
        setFoods(foods);
        
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
                        onChangeText={(value) => setFood(value)}
                        value={food}
                        placeholder="Votre aliment..."
                        autoCorrect={false}
                        keyboardAppearance='dark'
                        placeholderTextColor={colors.lightgray}
                        onSubmitEditing={(e) => getProducts(e.nativeEvent.text)}
                    />
                    {food.length > 0 &&
                        <TouchableWithoutFeedback onPress={() => setFood("")}>
                            <MaterialCommunityIcons color={colors.lightgray} name='close-circle' size={20} />
                        </TouchableWithoutFeedback>
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {loading &&
                        <ActivityIndicator size="small" color={colors.lightgray} />
                    }
                    {foods && !loading &&
                        <Section>
                            {
                                foods.map((food, index) => {
                                    return (
                                        <React.Fragment key={food._id}>
                                            <FoodItem food={{
                                                icon: food.selected_images.front.small.fr,
                                                name: food.product_name,
                                                energy: {unit: food.nutriments['energy-kcal_unit'], value: food.nutriments['energy-kcal_100g']},
                                                quantity: food.product_quantity
                                            }} />
                                            {foods.length - 1 !== index &&
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