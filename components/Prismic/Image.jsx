/* eslint-disable react/jsx-props-no-spreading */
import { prismicImagePropType } from '../../prop-types/prismic'

const Image = ({ image, ...props }) => {
    return image?.url ? (
        <img {...props} src={image.url} alt={image.alt} />
    ) : null
}

Image.propTypes = { image: prismicImagePropType }

export default Image
