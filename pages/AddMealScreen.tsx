import { SafeAreaView, View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../constants/colors'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/ScreenHeader'
import { StackNavigationProps } from '../navigation/StackNavigation'

type Props = {}

const AddMealScreen = (props: Props) => {
    const [meal, setMeal] = useState<string>("")
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title='Rechercher un aliment'
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
                rightIcon={{ name: "qrcode-scan", action: () => navigation.navigate("Scan") }}
            />
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons color={colors.white} name='magnify' size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setMeal(value)}
                        value={meal}
                        placeholder="Votre aliment..."
                        autoCorrect={false}
                        keyboardAppearance='dark'
                        placeholderTextColor={colors.lightgray}
                    />
                    {meal.length > 0 &&
                        <TouchableWithoutFeedback onPress={() => setMeal("")}>
                            <MaterialCommunityIcons color={colors.lightgray} name='close-circle' size={20} />
                        </TouchableWithoutFeedback>
                    }
                </View>
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
        color: colors.white
    }
})

export default AddMealScreen