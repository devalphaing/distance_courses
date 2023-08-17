import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './MorePopup.module.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const MorePopup = ({ 
        moreVisible,
        setMoreVisible,
        head=null,
        content=null 
    }) => {
    

    const handleSubmit = () => {
        setMoreVisible(false)
    };

    return (
        <Fragment>
            <Dialog
                header={head}
                visible={moreVisible}
                onHide={() => setMoreVisible(false)}
                closable={false}
                // style={{ width: '50%' }}
                className={styles['popup']}
            >
                <div className={styles['parent-container']} onClick={handleSubmit}>
                    {content}
                    <Button onClick={handleSubmit} className={styles['btn']}>Ok</Button>
                </div>


            </Dialog>
        </Fragment>
    );
};

export default MorePopup;
