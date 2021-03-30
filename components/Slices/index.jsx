import PropTypes from 'prop-types'
import Banner from './Banner'
import Image from './Image'
import Copy from './Copy'
import PageLinks from './PageLinks'
import Locations from './Locations'
import FAQ from './FAQ'
import { prismicSliceComponent } from '../../prop-types/prismic'

const Slices = ({ body }) => {
    const renderSlice = (slice) => {
        const { slice_type } = slice
        let Component

        switch (slice_type) {
            case 'image': {
                Component = Image
                break
            }
            case 'banner': {
                Component = Banner
                break
            }
            case 'page_links': {
                Component = PageLinks
                break
            }
            case 'copy': {
                Component = Copy
                break
            }
            case 'locations': {
                Component = Locations
                break
            }
            case 'faq': {
                Component = FAQ
                break
            }
            default:
                return <div>{slice_type}</div>
        }
        return <Component {...slice} />
    }

    return (
        <div>
            {body.map((slice, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${slice.slice_type}-${index}`}>
                    {renderSlice(slice)}
                </div>
            ))}
        </div>
    )
}

Slices.propTypes = {
    body: PropTypes.arrayOf(PropTypes.shape(prismicSliceComponent)),
}

export default Slices
