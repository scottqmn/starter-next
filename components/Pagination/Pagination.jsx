import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import styles from './Pagination.module.scss'

const Pagination = ({ page, max }) => {
    const router = useRouter()
    const { t } = useTranslation('common')

    const isFirst = page === 1
    const isLast = page === max

    return (
        <div className='outer'>
            <div className={clsx(styles.wrap, 'inner--sm')}>
                <div className={clsx(styles.button, styles.prev)}>
                    {!isFirst && (
                        <Link href={`${router.pathname}?page=${page - 1}`}>
                            <a>{t('pagination.prev')}</a>
                        </Link>
                    )}
                </div>
                <div className={styles.current}>
                    {t('pagination.current', { num: page })}
                </div>
                <div className={clsx(styles.button, styles.next)}>
                    {!isLast && (
                        <Link href={`${router.pathname}?page=${page + 1}`}>
                            <a>{t('pagination.next')}</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default Pagination
