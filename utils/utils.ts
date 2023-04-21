import { useTranslation } from "react-i18next";

const capitalize = (sentence: string) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

const getLocalsCalendar = () => {
    const { t } = useTranslation();

    return {
        monthNames: [
            capitalize(t("JANUARY")),
            capitalize(t("FEBRUARY")),
            capitalize(t("MARCH")),
            capitalize(t("APRIL")),
            capitalize(t("MAY")),
            capitalize(t("JUNE")),
            capitalize(t("JULY")),
            capitalize(t("AUGUST")),
            capitalize(t("SEPTEMBER")),
            capitalize(t("OCTOBER")),
            capitalize(t("NOVEMBER")),
            capitalize(t("DECEMBER")),
        ],
        dayNamesShort: [
            capitalize(t("SUNDAY")),
            capitalize(t("MONDAY")),
            capitalize(t("TUESDAY")),
            capitalize(t("WEDNESDAY")),
            capitalize(t("THURSDAY")),
            capitalize(t("FRIDAY")),
            capitalize(t("SATURDAY"))
        ],
        monthNamesShort: [],
        dayNames: [],
        today: ""
    };
}

export {
    capitalize,
    getLocalsCalendar
}