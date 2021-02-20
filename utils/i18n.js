import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEN from '../public/locales/en/common.json'

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                common: commonEN,
            },
        },
        lng: 'en',

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
