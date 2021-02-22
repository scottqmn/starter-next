import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// import { Metadata } from '../components/Prismic'
import ItemList from '../../components/ItemList'

const List = ({ items }) => {
    const { t } = useTranslation('common')
    return <ItemList heading={t('pages.blog.title')} items={items} />
}

List.propTypes = { items: PropTypes.arrayOf(PropTypes.object) }

export default List
