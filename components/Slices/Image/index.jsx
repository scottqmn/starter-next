import clsx from 'clsx'
import { NextImage } from '../../Prismic'
import styles from './styles.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const Image = ({ primary }) => {
    const { image } = primary
    return (
        <div className={clsx(styles.outer, 'section')}>
            {image && <NextImage image={image} className={styles.image} />}
        </div>
    )
}

Image.propTypes = prismicSliceComponent

export default Image
