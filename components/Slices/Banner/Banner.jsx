import clsx from 'clsx'
import { NextImage, RichText } from '../../Prismic'
import styles from './Banner.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const Banner = ({ primary }) => {
    const { bg_image, label, subtitle, title, overlay } = primary
    return (
        <div className={clsx(styles.outer, 'outer')}>
            {bg_image && <NextImage image={bg_image} className={styles.bg} />}
            {overlay && <div className={styles.overlay} />}
            <div
                className={clsx(
                    styles.inner,
                    'inner--sm',
                    'section',
                    'ta-center'
                )}
            >
                {label && (
                    <div className={clsx(styles.label, 't-label')}>{label}</div>
                )}
                {title && (
                    <div className={clsx(styles.title, 't-title')}>
                        <RichText content={title} />
                    </div>
                )}
                {subtitle && (
                    <div className={clsx(styles.subtitle, 't-label')}>
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    )
}

Banner.propTypes = prismicSliceComponent

export default Banner
