import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'
import { NextImage } from '../Prismic'
import { linkResolver } from '../../utils/prismic'
import { postPropType } from '../../prop-types/prismic'
import styles from './styles.module.scss'

const PostItem = ({ item }) => {
    const { title, description, image } = item.data

    return (
        <Link key={item.uid} href={linkResolver(item)}>
            <a className={styles.post}>
                <div className={styles.thumbnail}>
                    <div className={styles.overlay} />
                    <NextImage className={styles.image} image={image} />
                </div>
                <div className={styles.info}>
                    <div className={clsx(styles.title, 't-subtitle')}>
                        {title}
                    </div>
                    {description && (
                        <div className={styles.description}>{description}</div>
                    )}
                </div>
            </a>
        </Link>
    )
}

PostItem.propTypes = {
    item: PropTypes.shape(postPropType),
}

export default PostItem
