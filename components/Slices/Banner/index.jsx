import clsx from 'clsx'
import Color from 'color'
import { NextImage, RichText } from '../../Prismic'
import styles from './styles.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const Banner = ({ primary }) => {
    const {
        bg_image,
        label,
        subtitle,
        title,
        color = '#000000',
        overlay,
    } = primary

    const colorIsLight = Color(color).isLight()

    return (
        <div
            className={clsx(styles.outer, 'full-width')}
            style={{ '--text': color }}
        >
            {bg_image && <NextImage image={bg_image} className={styles.bg} />}
            {overlay && (
                <div
                    className={clsx(
                        styles.overlay,
                        colorIsLight && styles.isLight
                    )}
                />
            )}
            <div className={clsx(styles.inner, 'section', 'ta-center')}>
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
