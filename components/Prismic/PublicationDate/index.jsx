import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

const PublicationDate = ({ doc, format = 'MMMM DD, YYYY' }) => {
    const { t } = useTranslation('common')
    const { first_publication_date, last_publication_date } = doc

    const formatIfExists = (date) =>
        date ? moment(date).format(format) : false

    const first = formatIfExists(first_publication_date)
    const last = formatIfExists(last_publication_date)

    const different = first !== last

    return (
        <>
            <div className='publish-date publish-date--first'>
                {t('post.published', { date: first })}
            </div>
            {different && (
                <div className='publish-date publish-date--last'>
                    {t('post.edited', { date: last })}
                </div>
            )}
        </>
    )
}

PublicationDate.propTypes = {
    doc: PropTypes.shape({
        first_publication_date: PropTypes.string,
        last_publication_date: PropTypes.string,
    }),
    format: PropTypes.string,
}

export default PublicationDate
