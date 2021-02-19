import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'

const Layout = ({ children, data }) => {
    return (
        <div className={styles.container}>
            <Header data={data?.header?.data} />
            <main className={styles.main}>{children}</main>
            <Footer data={data?.footer?.data} />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    data: PropTypes.shape({
        header: PropTypes.object,
        footer: PropTypes.object,
    }),
}

export default Layout
