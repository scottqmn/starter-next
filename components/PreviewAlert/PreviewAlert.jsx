import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './PreviewAlert.module.scss'

const PreviewAlert = ({ preview }) => {
    return (
        preview && (
            <a
                className={clsx(styles.wrap, 't-label')}
                href='/api/exit-preview'
            >
                Exit Preview
            </a>
        )
    )
}

PreviewAlert.propTypes = {
    preview: PropTypes.bool,
}

export default PreviewAlert
