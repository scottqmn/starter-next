import PropTypes from 'prop-types'
import Head from 'next/head'
import DEFAULT from '../../../constants/metadata'
import { prismicImagePropType } from '../../../prop-types/prismic'

const Metadata = ({ meta_title, meta_description, meta_image }) => {
    const title = `${meta_title ? `${meta_title} — ` : ''}${DEFAULT.title}`
    const description = meta_description || DEFAULT.description
    const image = meta_image?.url || DEFAULT.image

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            {/* Open Graph/Facebook */}
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            {/* Twitter */}
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
        </Head>
    )
}

Metadata.propTypes = {
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    meta_image: prismicImagePropType,
}

export default Metadata
