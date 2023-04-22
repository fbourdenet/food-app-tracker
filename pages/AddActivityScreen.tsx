import { SafeAreaView, View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../constants/colors'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ScreenHeader from '../components/shared/ScreenHeader'
import { StackNavigationProps } from '../types/StackNavigationProps';

const AddActivityScreen = () => {
    const [activity, setActivity] = useState<string>("")
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title='Ajouter une activité'
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
                rightIcon={{ name: "qrcode-scan", action: () => navigation.navigate("Scan") }}
            />
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons color={colors.white} name='magnify' size={20} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setActivity(value)}
                        value={activity}
                        placeholder="Votre activité..."
                        autoCorrect={false}
                        keyboardAppearance='dark'
                        placeholderTextColor={colors.lightgray}
                    />
                    {activity.length > 0 &&
                        <TouchableWithoutFeedback onPress={() => setActivity("")}>
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

export default AddActivityScreen