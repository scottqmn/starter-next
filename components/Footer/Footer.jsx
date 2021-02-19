import PropTypes from 'prop-types'
import clsx from 'clsx'
import { NextImage, PrismicLink } from '../Prismic'
import styles from './Footer.module.scss'

const Footer = ({ data }) => {
    const { title, social, links } = data

    return (
        <footer className={clsx(styles.outer, 'outer')}>
            <div className={clsx(styles.inner, 'inner')}>
                <div className={clsx(styles.title, 't-h2')}>{title}</div>
                {social.length && (
                    <div className={clsx(styles.row, styles.social)}>
                        {social.map((item) => {
                            const { icon, link, link_text } = item
                            return (
                                <PrismicLink key={link_text} link={link}>
                                    {icon ? (
                                        <NextImage
                                            image={icon}
                                            className={styles.socialIcon}
                                        />
                                    ) : (
                                        <div>{link_text}</div>
                                    )}
                                </PrismicLink>
                            )
                        })}
                    </div>
                )}
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
