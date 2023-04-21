import { format } from 'date-fns'
import React, { useState } from 'react'

import { Calendar } from 'react-native-calendars';
import { colors } from '../../constants/colors';

const CustomDatePicker = () => {
    const [selected, setSelected] = useState(format(new Date(Date.now()), "yyyy-mm-dd"));

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
    )
}

export default CustomDatePicker