import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const LocaleToggle = () => {
    const { t } = useTranslation('common')
    const router = useRouter()
    const { pathname, asPath, locale, locales } = router
    // Next locale in provided array
    const nextLocale =
        locales[
            (locales.findIndex((current) => current === locale) + 1) %
                locales.length
        ]

    return (
        <Link href={pathname} as={asPath} locale={nextLocale}>
            <a>{t(`locales.${nextLocale}`)}</a>
        </Link>
    )
}

export default LocaleToggle
