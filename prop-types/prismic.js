import PropTypes from 'prop-types'

export const prismicQueryPropType = PropTypes.shape({
    data: PropTypes.object,
})

export const prismicImagePropType = PropTypes.shape({
    dimensions: PropTypes.object,
    alt: PropTypes.string,
    url: PropTypes.string,
})

export const prismicLinkPropType = PropTypes.shape({
    link_type: PropTypes.oneOf(['Web', 'Document', 'Media', 'Any']),
    target: PropTypes.string,
    url: PropTypes.string,
})

export const prismicRichTextPropType = PropTypes.arrayOf(
    PropTypes.shape({
        spans: PropTypes.array,
        text: PropTypes.string,
        type: PropTypes.string,
    })
)

export const prismicMediaPropType = PropTypes.shape({
    link_type: PropTypes.string,
    name: PropTypes.string,
    kind: PropTypes.string,
    url: PropTypes.string.isRequired,
    size: PropTypes.string,
})

export const prismicSliceComponent = {
    slice_type: PropTypes.string,
    primary: PropTypes.object,
    items: PropTypes.any, // TODO: refine
}
