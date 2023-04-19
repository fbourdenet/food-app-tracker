import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

type Props = {}

const CustomDatePicker = (props: Props) => {
    const [selected, setSelected] = useState('');

    return (
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
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                }
            }}
        />
    )
}

export default CustomDatePicker