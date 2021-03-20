import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { PrismicLink } from '../Prismic'
import { prismicLinkPropType } from '../../prop-types/prismic'
import { isEmptyLink } from '../../utils/prismic'
import styles from './HeaderNavGroup.module.scss'

const HeaderNavGroup = ({ group }) => {
    const { t } = useTranslation('common')
    const { main_link, main_text, dropdown = [] } = group?.data || {}

    const filteredDropdown = dropdown.filter(({ link }) => !isEmptyLink(link))
    const hasDropdown = filteredDropdown.length > 0

    const [clickOpen, setClickOpen] = useState(false)
    const [hfOpen, setHFOpen] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(clickOpen || hfOpen)
    }, [clickOpen, hfOpen])

    const toggleMenu = () => setClickOpen((curr) => !curr)
    const hideClickMenu = () => setClickOpen(false)
    const showHFMenu = () => setHFOpen(true)
    const hideHFMenu = () => setHFOpen(false)

    return (
        <ClickAwayListener onClickAway={hideClickMenu}>
            <div className={styles.navItem} onMouseLeave={hideHFMenu}>
                <div className={styles.link} onMouseEnter={showHFMenu}>
                    <PrismicLink link={main_link}>{main_text}</PrismicLink>
                    {hasDropdown && (
                        <button
                            type='button'
                            onClick={toggleMenu}
                            aria-haspopup='true'
                            aria-expanded={open}
                            aria-label={t(open ? 'nav.hide' : 'nav:show')}
                            className={clsx(styles.arrow, open && styles.open)}
                        >
                            <ArrowDropDownIcon />
                        </button>
                    )}
                </div>
                {hasDropdown && open && (
                    <div className={styles.navDropdown}>
                        {dropdown.map(({ link, text }) => (
                            <div
                                key={link.id || link.url}
                                className={styles.link}
                            >
                                <PrismicLink link={link}>{text}</PrismicLink>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ClickAwayListener>
    )
}

HeaderNavGroup.propTypes = {
    group: PropTypes.shape({
        data: PropTypes.shape({
            main_link: prismicLinkPropType,
            main_text: PropTypes.string.isRequired,
            dropdown: PropTypes.arrayOf(
                PropTypes.shape({
                    link: prismicLinkPropType,
                    text: PropTypes.string,
                })
            ),
        }),
    }),
}

export default HeaderNavGroup
