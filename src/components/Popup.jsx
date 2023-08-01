import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Popup.module.css';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const Popup = () => {
    const [visible, setVisible] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 3000);
    }, []);

    const showSuccess = (e) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: e ? e : 'Form Submitted', life: 3000 });
    };

    const showError = (e) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: e, life: 3000 });
    };

    const isValidEmail = (str) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(str);
    }

    const isValidPhoneNumber = (phoneNumber) => {
        // Regular expression to match a valid phone number
        const phoneRegex = /^(\+?[0-9]{1,4})?\s?(\d{7,14})$/
        // Check if the phoneNumber matches the regex pattern
        return phoneRegex.test(phoneNumber)
    }

    const handleSubmit = () => {

        const userEmail = userInfo?.email
        const userName = userInfo?.name
        const userPhone = userInfo?.phone

        let count = 0

        if (!isValidEmail(userEmail)) {
            showError('Email not valid please re-enter')
            console.log("Invalid email address.");
            count++
        }

        if(!isValidPhoneNumber(userPhone)){
            showError('Phone no. not valid please re-enter')
            console.log("Invalid phone.");
            count++
        }

        if(userName === null || userName?.length <= 1){
            showError('Name not valid please re-enter')
            console.log("Invalid name.");
            count++
        }

        if(count === 0){
            console.log('Form submitted!', userInfo);
            setVisible(false)
            showSuccess()
        }
    };

    const nameChangeHandler = (e) => {
        const obj = {
            name: e.target.value,
            phone: userInfo?.phone ? userInfo.phone : null,
            email: userInfo?.email ? userInfo.email : null
        }
        setUserInfo(obj)
    }

    const phoneChangeHandler = (e) => {
        const obj = {
            name: userInfo?.name ? userInfo.name : null,
            phone: e.target.value,
            email: userInfo?.email ? userInfo.email : null
        }

        setUserInfo(obj)
    }

    const emailChangeHandler = (e) => {
        const obj = {
            name: userInfo?.name ? userInfo.name : null,
            phone: userInfo?.phone ? userInfo.phone : null,
            email: e.target.value
        }
        setUserInfo(obj)
    }

    return (
        <Fragment>

            <Toast ref={toast} />

            <Dialog
                header="Form"
                visible={visible}
                onHide={() => setVisible(false)}
                closable={false}
                // style={{ width: '50%' }}
                className={styles['popup']}
            >
                <div className={styles['parent-container']}>
                    <div className={styles['form-group']}>
                        {/* <label>Name:</label> */}
                        <input type="text" placeholder="Enter your name" onChange={(e) => nameChangeHandler(e)} className={styles['input']} />
                    </div>
                    <div className={styles['form-group']}>
                        {/* <label>Phone:</label> */}
                        <input type="text" placeholder="Enter your phone number" onChange={(e) => phoneChangeHandler(e)} className={styles['input']} />
                    </div>
                    <div className={styles['form-group']}>
                        {/* <label>Email:</label> */}
                        <input type="email" placeholder="Enter your email address" onChange={(e) => emailChangeHandler(e)} className={styles['input']} />
                    </div>
                    <div className={styles['form-group']}>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    );
};

export default Popup;
