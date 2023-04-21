import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import { en, fr } from "./translations";


//empty for now
const resources: Resource = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr
    }
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;