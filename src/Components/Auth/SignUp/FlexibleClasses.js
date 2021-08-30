import React from 'react';
import styles from './SignUp.module.css';

const FlexibleClasses = () => {
    return (
        <div className={styles.flexible_classes}>
            <p className={styles.flexible_header}>
                Flexible online classes
            </p>

            <p className={styles.flexible_sub_header}>
                You will be able to pick your own schedule
                Study whenever you want and even
                download classes to watch in offline mode.
            </p>
            <img src="/assets/images/steps/flexible.png" alt="avatar" />
            <button className={styles.flexible_btn_online}>
                Im excited! Lest do ot
            </button>
        </div>
    );
};

export default FlexibleClasses;