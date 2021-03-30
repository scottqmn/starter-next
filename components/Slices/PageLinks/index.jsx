import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { NextImage, Button, RichText } from '../../Prismic'
import styles from './styles.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'
import { asText } from '../../../utils/helpers'

const PageLinks = ({ items }) => {
    const { t } = useTranslation('common')
    const filteredItems = items.filter(
        ({ cta_link }) => cta_link?.link_type && cta_link.link_type !== 'Any'
    )

    return (
        <div className='section'>
            <div className={styles.itemContainer}>
                {filteredItems?.map((item) => {
                    const {
                        cta_link,
                        cta_text,
                        description,
                        image,
                        title,
                    } = item

                    const hasCTA = cta_link

                    return (
                        <div key={asText(title)} className={styles.itemWrap}>
                            {image && (
                                <NextImage
                                    image={image}
                                    className={styles.image}
                                />
                            )}
                            {title && (
                                <div
                                    className={clsx(styles.title, 't-subtitle')}
                                >
                                    <RichText content={title} />
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
                                        text={cta_text || t('cta.read-more')}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

PageLinks.propTypes = prismicSliceComponent

export default PageLinks
