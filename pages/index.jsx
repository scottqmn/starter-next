import Page from '../templates/Page'
import { Client } from '../utils/prismic'
import LOCALES from '../constants/locales'

const Index = (props) => <Page {...props} />

export const getStaticProps = async (context) => {
    const {
        req,
        locale,
        defaultLocale,
        preview = null,
        previewData = {},
    } = context

    const { ref } = previewData

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

    const pageRes = await Client(req).getByUID('page', 'index', queryOptions)

    const prismicData = {
        page: pageRes,
    }

    return {
        props: { prismicData, preview },
    }
}

export default Index
