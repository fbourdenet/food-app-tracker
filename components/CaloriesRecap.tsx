import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Slider } from '@miblanchard/react-native-slider';
import { colors } from '../constants/colors';

const CaloriesRecap = () => {
    return (
        <View style={styles.container}>
            <Text>Vous pouvez manger encore 628 calories</Text>
            <Slider
                minimumValue={0}
                maximumValue={100}
                value={20}
                minimumTrackTintColor={colors.green}
                trackStyle={{ height: 10, borderRadius: 10 }}
                thumbStyle={{ height: 0, width: 0 }}
                disabled
            />
            <View style={styles.caloriesContainer}>
                <Text>1200 calories absorbées</Text>
                <Text>Objectif: 1920 kcal</Text>
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