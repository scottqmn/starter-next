import PropTypes from 'prop-types'
import Slices from '../../components/Slices'

const Page = ({ prismicData }) => {
    const slicesBody = prismicData?.page?.data.body
    return <Slices body={slicesBody} />
}

Page.propTypes = {
    prismicData: PropTypes.object,
}

export default Page
