import clsx from 'clsx'
import { RichText, NextImage, Map } from '../../Prismic'
import styles from './styles.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const Locations = ({ items }) => {
    return (
        <div className='outer'>
            <div className='inner'>
                {items?.map((item) => {
                    const {
                        name,
                        address,
                        description,
                        phone,
                        location,
                        icon,
                    } = item.location.data

                    return (
                        <div key={name} className={styles.location}>
                            <div className={clsx(styles.name, 't-subtitle')}>
                                {name}
                            </div>
                            <div className={clsx(styles.info, 'rte')}>
                                {address && <p>{address}</p>}
                                <RichText content={description} />
                                {phone && <a href={`tel:${phone}`}>{phone}</a>}
                                {icon && (
                                    <NextImage
                                        image={icon}
                                        className={styles.icon}
                                        objectFit='contain'
                                    />
                                )}
                            </div>
                            <div className={styles.map}>
                                <div className={styles.mapInner}>
                                    {location && (
                                        <Map
                                            address={address}
                                            location={location}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

Locations.propTypes = prismicSliceComponent

export default Locations
