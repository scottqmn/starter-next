import PropTypes from 'prop-types'
import clsx from 'clsx'
import { PrismicLink } from '../Prismic'
import styles from './Footer.module.scss'

const Footer = ({ data }) => {
    const { title, links } = data

    return (
        <footer className={clsx(styles.outer, 'outer')}>
            <div className={clsx(styles.inner, 'inner')}>
                <div className={clsx(styles.title, 't-subtitle')}>{title}</div>
                <nav className={clsx(styles.row, styles.links, 't-label')}>
                    {links?.map(({ link, link_text }) => {
                        return (
                            <div
                                key={link.id || link.url}
                                className={styles.link}
                            >
                                <PrismicLink link={link}>
                                    {link_text}
                                </PrismicLink>
                            </div>
                        )
                    })}
                </nav>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    data: PropTypes.object,
}

export default Footer
