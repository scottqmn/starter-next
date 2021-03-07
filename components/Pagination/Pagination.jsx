import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import MuiPagination from '@material-ui/lab/Pagination'
import styles from './Pagination.module.scss'

const Pagination = ({ page, count }) => {
    const router = useRouter()

    const handleChange = (e, selectedPage) => {
        router.replace(
            `${router.pathname}${
                selectedPage === 1 ? '' : `?page=${selectedPage}`
            }`
        )
    }

    return (
        count > 1 && (
            <div className='outer'>
                <div className={clsx(styles.wrap, 'inner--sm')}>
                    <MuiPagination
                        page={page}
                        count={count}
                        onChange={handleChange}
                        color='primary'
                        classes={{ ul: styles.list }}
                    />
                </div>
            </div>
        )
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
}

export default Pagination
