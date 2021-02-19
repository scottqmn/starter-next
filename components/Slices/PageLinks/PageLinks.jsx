import clsx from 'clsx'
import { NextImage, Button } from '../../Prismic'
import styles from './PageLinks.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

// TODO: default values for cta_text
const PageLinks = ({ items }) => {
    return (
        <div className='outer'>
            <div className={clsx(styles.inner, 'inner', 'section')}>
                <div className={styles.itemContainer}>
                    {items?.map((item) => {
                        const {
                            cta_link,
                            cta_text,
                            description,
                            image,
                            title,
                        } = item
                        const hasCTA = cta_link && cta_text

                        return (
                            <div key={title} className={styles.itemWrap}>
                                {image && (
                                    <NextImage
                                        image={image}
                                        className={styles.image}
                                    />
                                )}
                                {title && (
                                    <div className={clsx(styles.title, 't-h2')}>
                                        {title}
                                    </div>
                                )}
                                {description && (
                                    <div
                                        className={clsx(
                                            styles.desc,
                                            't-body',
                                            'c-primary65'
                                        )}
                                    >
                                        {description}
                                    </div>
                                )}
                                {hasCTA && (
                                    <div className={styles.cta}>
                                        <Button
                                            link={cta_link}
                                            text={cta_text}
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

PageLinks.propTypes = prismicSliceComponent

export default PageLinks
