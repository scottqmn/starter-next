/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'
import { prismicImagePropType } from '../../../prop-types/prismic'
import styles from './NextImage.module.scss'

const NextImage = ({
    image,
    className,
    layout = 'fill',
    objectFit = 'cover',
    ...props
}) => {
    if (image.url && !image.alt) {
        console.warn('Missing alt for image:', image)
    }

    return image?.url ? (
        <div className={clsx(styles.wrap, className)}>
            <Image
                {...props}
                src={image.url}
                alt={image.alt}
                layout={layout}
                objectFit={objectFit}
            />
        </div>
    ) : null
}

NextImage.propTypes = {
    image: prismicImagePropType,
    className: PropTypes.any,
    layout: PropTypes.oneOf(['fixed', 'intrinsic', 'responsive', 'fill']),
    objectFit: PropTypes.string,
}

export default NextImage
