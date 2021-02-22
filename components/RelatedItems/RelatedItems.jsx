import PropTypes from 'prop-types'
import clsx from 'clsx'
import { NextImage } from '../Prismic'
import { prismicImagePropType } from '../../prop-types/prismic'
import styles from './RelatedItems.module.scss'

const RelatedItems = ({ items }) => {
    // TODO: check empty objects
    return (
        <div>
            <h2 className={clsx(styles.heading, 't-title')}>Related Posts</h2>
            <div className={styles.container}>
                {items.map(({ title, description, image }) => {
                    return (
                        <div key={title} className={styles.relatedItem}>
                            <NextImage className={styles.image} image={image} />
                            <div className={styles.info}>
                                <div
                                    className={clsx(styles.title, 't-subtitle')}
                                >
                                    {title}
                                </div>
                                {description && (
                                    <div className={styles.description}>
                                        {description}
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

RelatedItems.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: prismicImagePropType,
        })
    ),
}

export default RelatedItems
