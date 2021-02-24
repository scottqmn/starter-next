import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// import { Metadata } from '../components/Prismic'
import ItemList from '../../components/ItemList'
import Pagination from '../../components/Pagination'

const List = ({ items, page, max }) => {
    const { t } = useTranslation('common')
    const hasPages = max > 1

    return (
        <>
            <ItemList heading={t('pages.blog.title')} items={items} />
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
