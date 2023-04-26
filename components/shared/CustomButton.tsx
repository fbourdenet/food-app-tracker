import { Text, Button, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { fonts } from '../../constants/fonts'
import { TouchableOpacity } from '@gorhom/bottom-sheet'

type CustomButtonProps = {
    title: string,
    action?: Function
}

const CustomButton = ({ title, action }: CustomButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => action && action()}>
            <Text style={fonts.h4}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.green,
        borderRadius: 50,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})

export default CustomButton