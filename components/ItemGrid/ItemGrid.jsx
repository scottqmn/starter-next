import PropTypes from 'prop-types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import PostItem from '../PostItem'
import styles from './ItemGrid.module.scss'

const ItemGrid = ({ heading, items }) => {
    const variants = {
        grid: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.1,
                },
            },
        },
        item: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        },
    }
    return (
        <div className='outer'>
            <div className='inner'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-h2')}>{heading}</h2>
                )}
                <motion.ul
                    className={styles.grid}
                    initial='hidden'
                    animate='visible'
                    variants={variants.grid}
                >
                    {items.map((item) => (
                        <motion.li key={item.uid} variants={variants.item}>
                            <PostItem item={item} />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

ItemGrid.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(projectPropTypes)),
}

export default ItemGrid
