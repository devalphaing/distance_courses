import React, { Fragment } from 'react'
import styles from './InfoCard.module.css'

const InfoCard = ()=>  {
  return (
    <div className={styles['container']}>
        <div className={styles['year-text-container']}><div className={styles['year-text']}>2 years</div></div>
        <div className={styles['topic']}>Online MBA</div>
        <div className={styles['compare-text']}>Compare 27 Now</div>
    </div>
  )
}

export default InfoCard