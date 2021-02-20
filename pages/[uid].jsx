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

export const getStaticPaths = async () => {
    const pageRes = await Client().query([
        Predicates.at('document.type', 'page'),
    ])

    const uidPaths =
        pageRes.results
            ?.filter(({ uid }) => uid !== 'index')
            .map(({ uid }) => {
                return { params: { uid } }
            }) || []

    return {
        paths: uidPaths,
        fallback: false,
    }
}

export default Page
