import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import MuiPagination from '@material-ui/lab/Pagination'
import styles from './styles.module.scss'

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
            <div className={styles.wrap}>
                <MuiPagination
                    page={page}
                    count={count}
                    onChange={handleChange}
                    color='primary'
                    classes={{ ul: styles.list }}
                />
            </div>
        )
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
}

export default Pagination
