
import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode, useRef, useCallback, RefObject } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { colors } from '../constants/colors';

type CustomBottomSheetProps = {
    reference: RefObject<BottomSheetModal>
    children: ReactNode
}

const CustomBottomSheet = ({ reference, children }: CustomBottomSheetProps) => {

    return (
        <BottomSheetModal
            ref={reference}
            index={1}
            snapPoints={["25%", "50%"]}
            enablePanDownToClose={true}
            backgroundStyle={{
                display: 'none'
            }}
            handleIndicatorStyle={{
                backgroundColor: colors.white
            }}
        >
            <View style={styles.container}>
                {children}
            </View>
        </BottomSheetModal>
    )
}

export default CustomBottomSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkgray,
        borderRadius: 10,
        paddingTop: 10
    },
})