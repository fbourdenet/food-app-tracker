import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { colors } from '../constants/colors';

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
                todayBackgroundColor: colors.green,
                todayTextColor: colors.white,
                textDisabledColor: '#d9e1e8',
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