import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

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
                    children={() => <Text style={fonts.p}>20g</Text>}
                    tintColor={colors.red}
                    backgroundColor={colors.gray}
                />
                <Text style={fonts.p}>Glucides</Text>
            </View>
            <View style={styles.nutrientContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    lineCap="round"
                    rotation={0}
                    fill={70}
                    children={() => <Text style={fonts.p}>70g</Text>}
                    tintColor={colors.blue}
                    backgroundColor={colors.gray}
                />
                <Text style={fonts.p}>Lipides</Text>
            </View>
            <View style={styles.nutrientContainer}>
                <AnimatedCircularProgress
                    size={80}
                    width={10}
                    lineCap="round"
                    rotation={0}
                    fill={80}
                    children={() => <Text style={fonts.p}>80g</Text>}
                    tintColor={colors.green}
                    backgroundColor={colors.gray}
                />
                <Text style={fonts.p}>Protéines</Text>
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