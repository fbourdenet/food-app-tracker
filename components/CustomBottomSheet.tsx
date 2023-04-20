
import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode, useRef, useCallback, RefObject } from 'react'
import { BottomSheetView, BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { colors } from '../constants/colors';

type CustomBottomSheetProps = {
    reference: RefObject<BottomSheetModal>
    children: ReactNode
}

const CustomBottomSheet = ({ reference, children }: CustomBottomSheetProps) => {

    return (
        <BottomSheetModal
            ref={reference}
            index={0}
            snapPoints={["50%"]}
            enablePanDownToClose={true}
            backgroundStyle={{
                display: 'none'
            }}
            backdropComponent={(props) => {
                return <BottomSheetBackdrop
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    {...props}
                />
            }}
            handleIndicatorStyle={{
                backgroundColor: colors.white
            }}
        >
            <BottomSheetView style={styles.container}>
                {children}
            </BottomSheetView>
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