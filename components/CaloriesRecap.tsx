import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Slider } from '@miblanchard/react-native-slider';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

const CaloriesRecap = () => {
    return (
        <View style={styles.container}>
            <Text style={fonts.p}>Vous pouvez manger encore 628 calories</Text>
            <Slider
                minimumValue={0}
                maximumValue={100}
                value={20}
                minimumTrackTintColor={colors.green}
                maximumTrackTintColor={colors.gray}
                trackStyle={{ height: 10, borderRadius: 10 }}
                thumbStyle={{ height: 0, width: 0 }}
                disabled
            />
            <View style={styles.caloriesContainer}>
                <Text style={fonts.p}>1200 calories absorbées</Text>
                <Text style={fonts.p}>Objectif: 1920 kcal</Text>
            </View>
        </View>
    )
}

export default CaloriesRecap

const styles = StyleSheet.create({
    container: {
        gap: -5
    },
    caloriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});