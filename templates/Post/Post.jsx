import PropTypes from 'prop-types'
// import clsx from 'clsx'
import {
    NextImage,
    // Metadata,
    RichText,
    PublicationDate,
} from '../../components/Prismic'
import PreviewAlert from '../../components/PreviewAlert'
import ItemGrid from '../../components/ItemGrid'
import styles from './Post.module.scss'

const Post = ({ post, preview }) => {
    const { title, content, image, related } = post.data
    const relatedPosts = related?.map((item) => item.post) || []

    return (
        <>
            <PreviewAlert preview={preview} />
            {image && <NextImage image={image} className={styles.hero} />}
            <div className='outer'>
                <div className='inner--sm'>
                    <div className={styles.info}>
                        <h1 className='t-title'>{title}</h1>
                        <PublicationDate doc={post} />
                    </div>
                    <div className='rte'>
                        <RichText content={content} />
                    </div>
                </div>
            </div>
            <div className={styles.related}>
                <ItemGrid heading='Related Posts' items={relatedPosts} />
            </div>
        </>
    )
}

Post.propTypes = { post: PropTypes.object, preview: PropTypes.bool }

export default Post
