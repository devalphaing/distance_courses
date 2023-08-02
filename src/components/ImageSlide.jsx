import React from 'react'
import styles from './ImageSlide.module.css'
import { Fragment } from 'react'

const ImageSlide = () => {
    return (
        <Fragment>
            <div className={styles['container']}>
                <img src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' />
            </div>
        </Fragment>
    )
}

export default ImageSlide
