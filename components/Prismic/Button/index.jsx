import PropTypes from 'prop-types'
import clsx from 'clsx'
import PrismicLink from '../PrismicLink'
import styles from './styles.module.scss'
import { prismicLinkPropType } from '../../../prop-types/prismic'

const Button = ({ link, text }) => {
    return (
        <PrismicLink
            link={link}
            className={clsx(styles.button, 't-label', 'ta-center')}
        >
            {text}
        </PrismicLink>
    )
}

Button.propTypes = {
    link: prismicLinkPropType,
    text: PropTypes.string.isRequired,
}

export default Button
