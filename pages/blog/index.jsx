import List from '../../templates/List'
import { Client, Predicates } from '../../utils/prismic'

export const getStaticProps = async (context) => {
    const { req, preview = null, previewData = {} } = context
    const { ref } = previewData

    const queryOptions = {}

    if (ref) {
        queryOptions.ref = ref
    }

    const allPostsRes = await Client(req).query(
        [Predicates.at('document.type', 'blog_post')],
        queryOptions
    )

    const items = allPostsRes.results

    return {
        props: { items, preview },
    }
}

export default List
