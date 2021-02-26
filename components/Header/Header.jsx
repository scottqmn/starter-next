import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import FocusTrap from 'focus-trap-react'
import MenuToggle from '../MenuToggle'
import { NextImage, PrismicLink } from '../Prismic'
import styles from './Header.module.scss'

const Header = ({ data }) => {
    const { links, logo, logo_link } = data
    const router = useRouter()

    const [menuOpen, setMenuOpen] = useState(false)

    const hideMenu = () => setMenuOpen(false)

    useEffect(() => {
        window.addEventListener('resize', hideMenu)
        router.events.on('routeChangeStart', hideMenu)

        return () => {
            window.removeEventListener('resize', hideMenu)
            router.events.off('routeChangeStart', hideMenu)
        }
    }, [router.events])

    const list = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                type: 'spring',
                bounce: 0.2,
            },
        },
        closing: {
            height: 0,
            opacity: 0,
        },
    }

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        closing: { opacity: 0 },
    }

    return (
        <header className={styles.header}>
            <FocusTrap active={menuOpen}>
                <div className='outer'>
                    <div className='inner'>
                        <div className={styles.row}>
                            <PrismicLink link={logo_link}>
                                <NextImage
                                    image={logo}
                                    className={styles.logo}
                                />
                            </PrismicLink>
                            <MenuToggle
                                className={styles.menuToggle}
                                status={menuOpen}
                                onClick={() => setMenuOpen((curr) => !curr)}
                            />
                        </div>
                        <AnimatePresence>
                            {menuOpen && (
                                <motion.nav
                                    className={clsx(styles.navMenu, 't-label')}
                                    initial='hidden'
                                    animate='visible'
                                    exit='closing'
                                    variants={list}
                                >
                                    {links?.map(({ link, link_text }) => {
                                        return (
                                            <motion.div
                                                key={link.id || link.url}
                                                className={styles.link}
                                                variants={item}
                                            >
                                                <PrismicLink link={link}>
                                                    {link_text}
                                                </PrismicLink>
                                            </motion.div>
                                        )
                                    })}
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </FocusTrap>
            <div className='outer'>
                <div className={clsx(styles.row, 'inner')}>
                    <nav className={clsx(styles.navRow, 't-label')}>
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
            </div>
        </header>
    )
}

Header.propTypes = {
    data: PropTypes.object,
}

export default Header
