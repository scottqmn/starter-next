import PropTypes from 'prop-types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import PostItem from '../PostItem'
import { postPropType } from '../../prop-types/prismic'
import styles from './ItemList.module.scss'

const ItemList = ({ heading, items }) => {
    const list = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <div className='outer'>
            <div className='inner--sm'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-title')}>
                        {heading}
                    </h2>
                )}
                <motion.ul
                    className={styles.list}
                    initial='hidden'
                    animate='visible'
                    variants={list}
                >
                    {items?.map((item) => {
                        return (
                            <motion.li key={item.uid} variants={itemVariants}>
                                <PostItem item={item} />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(postPropType)),
}

export default ItemList
