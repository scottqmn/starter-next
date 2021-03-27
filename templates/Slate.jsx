import PropTypes from 'prop-types'

const Slate = ({ prismicData }) => {
    return (
        <div className='outer'>
            <div className='inner'></div>
        </div>
    )
}

Slate.propTypes = {
    prismicData: PropTypes.object,
}

export default Slate
