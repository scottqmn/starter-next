import PropTypes from 'prop-types'
import { NextImage, RichText, PublicationDate } from '../../components/Prismic'
import ItemGrid from '../../components/ItemGrid'
import styles from './styles.module.scss'

const Post = ({ post }) => {
    const { title, content, image, related } = post.data
    const relatedPosts = related?.map((item) => item.post) || []

    return (
        <>
            {image && (
                <div className='full-width'>
                    <NextImage image={image} className={styles.hero} />
                </div>
            )}
            <div>
                <div className={styles.info}>
                    <h1 className='t-title'>{title}</h1>
                    <PublicationDate doc={post} />
                </div>
                <div className='rte'>
                    <RichText content={content} />
                </div>
            </div>
            {relatedPosts?.length && (
                <div className={styles.related}>
                    <ItemGrid heading='Related Posts' items={relatedPosts} />
                </div>
            )}
        </>
    )
}

Post.propTypes = { post: PropTypes.object }

export default Post
