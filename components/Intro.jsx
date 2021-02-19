import PropTypes from 'prop-types'
import clsx from 'clsx'
import SettingsSVG from '../public/settings.svg'
import styles from '../styles/components/Intro.module.css'

const Intro = ({ showIcon }) => {
    return (
        <div className={clsx(styles.container, 'rte')}>
            {showIcon && <SettingsSVG className={styles.icon} />}
            <h1 className={styles.title}>Starter: Next</h1>
            <p>Featuring:</p>
            <ul>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>eslint</li>
                <li>prettier</li>
                <li>gtag</li>
            </ul>
        </div>
    )
}

Intro.propTypes = {
    showIcon: PropTypes.bool,
}

export default Intro
