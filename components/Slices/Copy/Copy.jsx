import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { RichText, Button } from '../../Prismic'
import styles from './Copy.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const Copy = ({ primary }) => {
    const { t } = useTranslation('common')
    const { alignment, copy, cta_link, cta_text, title } = primary
    const hasCTA = cta_link && cta_text

    return (
        <div className={clsx('outer', alignment === 'center' && 'ta-center')}>
            <div className={clsx(styles.inner, 'inner--xs', 'section')}>
                {title && (
                    <div className={clsx(styles.title, 't-subtitle')}>
                        <RichText content={title} />
                    </div>
                )}
                {copy && (
                    <div className={clsx(styles.copy, 'rte')}>
                        <RichText content={copy} />
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
        </div>
    )
}

Copy.propTypes = prismicSliceComponent

export default Copy
