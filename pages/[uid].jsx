import PageTemplate from '../templates/Page'
import { Client, Predicates } from '../utils/prismic'
import LOCALES from '../constants/locales'

const Page = (props) => <PageTemplate {...props} />

export const getStaticProps = async (context) => {
    const {
        req,
        params,
        locale,
        defaultLocale,
        preview = null,
        previewData = {},
    } = context

    const { ref } = previewData

    const uid = params?.uid || 'index'

    const queryOptions = {
        fetchLinks: [
            'location.name',
            'location.address',
            'location.description',
            'location.phone',
            'location.location',
            'location.icon',
        ],
    }

    if (locale && locale !== defaultLocale) {
        queryOptions.lang = LOCALES[locale]
    }

    if (ref) {
        queryOptions.ref = ref
    }

    const pageRes = await Client(req).getByUID('page', uid, queryOptions)

    const prismicData = {
        page: pageRes,
    }

    return {
        props: { prismicData, preview },
    }
}

export const getStaticPaths = async (context) => {
    const { locales: nextLocales } = context

    const pageRes = await Client().query(
        [Predicates.at('document.type', 'page')],
        {
            lang: '*',
        }
    )

    const uidPaths =
        pageRes.results
            ?.filter(({ uid }) => uid !== 'index')
            .map(({ uid, lang }) => {
                const pathLocale = nextLocales.find(
                    (key) => LOCALES[key] === lang
                )
                return { params: { uid }, locale: pathLocale }
            }) || []

    return {
        paths: uidPaths,
        // fallback: true,
        fallback: false,
    }
}

export default Page
