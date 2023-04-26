import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../constants/colors'
import ScreenHeader from '../components/shared/ScreenHeader'
import { FoodScreenRouteProps } from '../types/FoodScreenRouteProps'
import { StackNavigationProps } from '../types/StackNavigationProps';
import Section from '../components/shared/Section'


const FoodScreen = () => {
    const route = useRoute<FoodScreenRouteProps>();
    const navigation = useNavigation<StackNavigationProps>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScreenHeader
                title={route.params.food.name}
                leftIcon={{ name: "chevron-left", action: navigation.goBack }}
            />
            <View style={styles.view}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: route.params.food.icon }} style={{ height: 150, width: '100%', resizeMode: 'contain' }} />
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
        gap: 20,
    },
    imageContainer: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 20
    },
    footer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FoodScreen