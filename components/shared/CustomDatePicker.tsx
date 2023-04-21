import { format } from 'date-fns'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { colors } from '../../constants/colors';
import { getLocalsCalendar } from '../../utils/utils';
import { getLocales } from 'expo-localization';
import CustomButton from './CustomButton';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';


const CustomDatePicker = () => {
    // format(new Date(Date.now()), "yyyy-mm-dd")
    const [selected, setSelected] = useState('');
    const { dismiss } = useBottomSheetModal();
    const languageCode = getLocales()[0].languageCode;

    LocaleConfig.locales[getLocales()[0].languageCode] = getLocalsCalendar();
    LocaleConfig.defaultLocale = getLocales()[0].languageCode;

    return (
        <>
            <Calendar
                style={{
                    backgroundColor: colors.darkgray,
                }}
                firstDay={1}
                hideExtraDays={true}
                theme={{
                    backgroundColor: colors.darkgray,
                    calendarBackground: colors.darkgray,
                    textSectionTitleColor: colors.white,
                    monthTextColor: colors.white,
                    textMonthFontWeight: "700",
                    selectedDayBackgroundColor: colors.green,
                    selectedDayTextColor: colors.white,
                    dayTextColor: colors.white,
                    textDayFontSize: 12,
                    textDayFontWeight: "500",
                    textDayStyle: {
                        marginTop: 9
                    },
                    textDayHeaderFontWeight: "600",
                    todayBackgroundColor: colors.green,
                    todayTextColor: colors.white,
                    arrowColor: colors.green,
                }}
                onDayPress={(daySelected) => {
                    setSelected(daySelected.dateString);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                    }
                }}
            />
            <View style={styles.buttonContainer}>
                <CustomButton title="Confirmer" action={dismiss}></CustomButton>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0
    },
})

export default CustomDatePicker