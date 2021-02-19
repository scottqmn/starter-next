import PropTypes from 'prop-types'
import { Metadata } from '../components/Prismic'
import PreviewAlert from '../components/PreviewAlert'
import Slices from '../components/Slices'

const Page = ({ prismicData, preview }) => {
    const slicesBody = prismicData?.page?.data.body

    return (
        <>
            <Metadata {...prismicData.page.data} />
            <PreviewAlert preview={preview} />
            <Slices body={slicesBody} />
        </>
    )
}

Page.propTypes = {
    prismicData: PropTypes.object,
    preview: PropTypes.bool,
}

export default Page
