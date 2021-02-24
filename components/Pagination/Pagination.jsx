import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Pagination.module.scss'

const Pagination = ({ page, max }) => {
    const router = useRouter()

    const isFirst = page === 1
    const isLast = page === max

    return (
        <div className='outer'>
            <div className='inner'>
                <div className={styles.wrap}>
                    <div className={styles.arrow}>
                        {!isFirst && (
                            <Link href={`${router.pathname}?page=${page - 1}`}>
                                <a>Previous</a>
                            </Link>
                        )}
                    </div>
                    <div>{page}</div>
                    <div className={styles.arrow}>
                        {!isLast && (
                            <Link href={`${router.pathname}?page=${page + 1}`}>
                                <a>Next</a>
                            </Link>
                        )}
                    </div>
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
