import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// import { Metadata } from '../components/Prismic'
import ItemGrid from '../../components/ItemGrid'
import Pagination from '../../components/Pagination'

const List = ({ items, page, max }) => {
    const { t } = useTranslation('common')
    const hasPages = max > 1

    return (
        <>
            <ItemGrid heading={t('pages.blog.title')} items={items} />
            {hasPages && <Pagination page={page} max={max} />}
        </>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    page: PropTypes.number,
    max: PropTypes.number,
}

export default List
