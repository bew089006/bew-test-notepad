import React from 'react'
import styles from './index.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainPage: React.FC = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.upperBar}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </nav>
    </div>
  )
}

export default MainPage
