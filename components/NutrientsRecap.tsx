import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { colors } from '../constants/colors'

const NutrientsRecap = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nutrientContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    lineCap="round"
                    rotation={0}
                    fill={20}
                    children={() => <Text>20g</Text>}
                    tintColor={colors.red}
                    backgroundColor={colors.darkgray}
                />
                <Text>Glucides</Text>
            </View>
            <View style={styles.nutrientContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    lineCap="round"
                    rotation={0}
                    fill={70}
                    children={() => <Text>70g</Text>}
                    tintColor={colors.blue}
                    backgroundColor={colors.darkgray}
                />
                <Text>Lipides</Text>
            </View>
            <View style={styles.nutrientContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    lineCap="round"
                    rotation={0}
                    fill={80}
                    children={() => <Text>80g</Text>}
                    tintColor={colors.green}
                    backgroundColor={colors.darkgray}
                />
                <Text>Protéines</Text>
            </View>
        </View>


    )
}

export default NutrientsRecap

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    nutrientContainer: {
        gap: 10,
        alignItems: 'center'
    }
});