import Page from '../templates/Page'
import { Client } from '../utils/prismic'

export const getStaticProps = async (context) => {
    const { req, preview = null, previewData = {} } = context

    const { ref } = previewData

    const queryOptions = {
        fetchLinks: [
            // 'location.name',
            // 'location.address',
            // 'location.description',
            // 'location.phone',
            // 'location.location',
            // 'location.icon',
        ],
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

export default Page
