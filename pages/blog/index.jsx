import List from '../../templates/List'
import { Client, Predicates } from '../../utils/prismic'

export const getServerSideProps = async (context) => {
    const { req, query, preview = null, previewData = {} } = context
    const { ref } = previewData
    const page = query?.page ? parseInt(query.page, 10) : 1

    const queryOptions = {
        pageSize: 12,
        page,
    }

    if (ref) {
        queryOptions.ref = ref
    }

    const allPostsRes = await Client(req).query(
        [Predicates.at('document.type', 'blog_post')],
        queryOptions
    )

    const { results, total_pages } = allPostsRes

    return {
        props: { items: results, page, max: total_pages, preview },
    }
}

export default List
