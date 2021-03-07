import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// import { Metadata } from '../components/Prismic'
import ItemGrid from '../../components/ItemGrid'
import Pagination from '../../components/Pagination'

const List = ({ items, page, count }) => {
    const { t } = useTranslation('common')

    return (
        <>
            <ItemGrid heading={t('pages.blog.title')} items={items} />
            <Pagination page={page} count={count} />
        </>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    page: PropTypes.number,
    count: PropTypes.number,
}

export default List
