import { Fragment } from 'react'
import clsx from 'clsx'
import { RichText } from '../../Prismic'
import styles from './styles.module.scss'
import { prismicSliceComponent } from '../../../prop-types/prismic'

const FAQ = ({ items }) => {
    return (
        <div className='outer'>
            <div className='inner--sm'>
                <dl>
                    {items?.map((item) => {
                        const { question, answer } = item

                        if (!question || !answer) {
                            // eslint-disable-next-line no-console
                            console.warn('Missing QA field', question, answer)
                            return null
                        }

                        return (
                            <Fragment key={`${question}-${answer}`}>
                                <dt
                                    className={clsx(
                                        styles.question,
                                        't-subtitle',
                                        'ta-center'
                                    )}
                                >
                                    {question}
                                </dt>
                                <dd className={clsx(styles.answer, 'rte')}>
                                    <RichText content={answer} />
                                </dd>
                            </Fragment>
                        )
                    })}
                </dl>
            </div>
        </div>
    )
}

FAQ.propTypes = prismicSliceComponent

export default FAQ
