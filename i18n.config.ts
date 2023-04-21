import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import { en, fr } from "./translations";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        en: {
            translation: en,
        },
        fr: {
            translation: fr
        }
    },
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;