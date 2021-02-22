import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'
import { Image } from '../Prismic'
import { linkResolver } from '../../utils/prismic'
import { prismicImagePropType } from '../../prop-types/prismic'
import styles from './PostItem.module.scss'

const PostItem = ({ item }) => {
    const { title, description, image, publish_date } = item.data

    return (
        <Link href={linkResolver(item)}>
            <a className={styles.wrap}>
                <Image className={styles.thumbnail} image={image} />
                <div className={styles.info}>
                    <div className='t-subtitle'>{title}</div>
                    <div>{publish_date}</div>
                    <div>{description}</div>
                </div>
            </a>
        </Link>
    )
}

PostItem.propTypes = {
    item: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['blog_post', 'news_post']),
        data: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            image: prismicImagePropType,
            publish_date: PropTypes.string,
        }),
    }),
}

export default PostItem
