import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './styles.module.scss'

const MenuToggle = ({ status, onClick, className }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            aria-label={status ? 'close menu' : 'open menu'}
            className={clsx(styles.button, className)}
        >
            <div className={clsx(styles.bars, status && styles.isOpen)}>
                <span className={styles.top} />
                <span className={styles.mid1} />
                <span className={styles.mid2} />
                <span className={styles.bottom} />
            </div>
        </button>
    )
}

MenuToggle.propTypes = {
    status: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.any,
}

export default MenuToggle
