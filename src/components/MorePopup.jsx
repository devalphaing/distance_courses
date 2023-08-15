import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './MorePopup.module.css';
import { Dialog } from 'primereact/dialog';

const MorePopup = () => {
    const [visible, setVisible] = useState(false);

    const handleSubmit = async () => {

    };

    return (
        <Fragment>
            <Dialog
                header="Form"
                visible={visible}
                onHide={() => setVisible(false)}
                closable={false}
                // style={{ width: '50%' }}
                className={styles['popup']}
            >
                <div className={styles['parent-container']}>

                </div>
            </Dialog>
        </Fragment>
    );
};

export default MorePopup;
