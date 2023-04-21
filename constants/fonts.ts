import {StyleSheet} from 'react-native'
import { colors } from './colors'

export const fonts = StyleSheet.create({
    h1: {
        fontSize: 28,
        fontWeight: "700",
        color: "white"
    },
    h2: {
        fontSize: 18,
        fontWeight: "700",
        color: "white"
    },
    h3: {
        fontSize: 16,
        fontWeight: "700",
        color: "white"
    },
    h4: {
        fontSize: 14,
        fontWeight: "700",
        color: "white"
    },
    h5: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.lightgray
    },
    h6: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.white
    },
    p: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.white
    },
    tiny: {
        fontSize: 6,
        fontWeight: "500",
        color: colors.white
    },
    icon: {
        fontSize: 25,
        color: colors.white
    }
})