import Post from '../../templates/Post'
import { Client, Predicates } from '../../utils/prismic'

export const getStaticProps = async (context) => {
    const { req, params, preview = null, previewData = {} } = context
    const { uid } = params
    const { ref } = previewData

    const queryOptions = {}

    if (ref) {
        queryOptions.ref = ref
    }

    const post = await Client(req).getByUID('blog_post', uid, queryOptions)

    return {
        props: { post, preview },
    }
}

export const getStaticPaths = async () => {
    const postRes = await Client().query([
        Predicates.at('document.type', 'blog_post'),
    ])

    const uidPaths =
        postRes.results.map(({ uid }) => {
            return { params: { uid } }
        }) || []

    return {
        paths: uidPaths,
        fallback: false,
    }
}

export default Post
