import PropTypes from 'prop-types'
import clsx from 'clsx'
import moment from 'moment'
import {
    NextImage,
    Metadata,
    RichText,
    PublicationDate,
} from '../../components/Prismic'
import PreviewAlert from '../../components/PreviewAlert'
import Slices from '../../components/Slices'
import styles from './Post.module.scss'

const Post = ({ post, preview }) => {
    const { title, content, image, publish_date } = post.data
    console.log('Post', post)

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
        </>
    )
}

Post.propTypes = { post: PropTypes.object, preview: PropTypes.bool }

export default Post
