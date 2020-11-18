import React from 'react'
import SettingsSVG from '../public/settings.svg'
import styles from '../styles/Intro.module.css'

type Props = {
  showIcon?: boolean
}

const Intro: React.FC<Props> = ({ showIcon }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {showIcon && <SettingsSVG className={styles.icon} />}
        <h1 className={styles.title}>Starter: Next</h1>
        <p>Featuring:</p>
        <ul>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>eslint</li>
          <li>prettier</li>
          <li>gtag</li>
        </ul>
      </main>
    </div>
  )
}

export default Intro
