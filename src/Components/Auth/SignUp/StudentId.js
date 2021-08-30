import React from 'react';
import styles from './SignUp.module.css';
const StudentId = () => {
    return (
        <form className={styles.id_sign_up}>
            <div className={styles.id_sign_up_step_progress}>
                <div className={styles.id_sign_up_step_progress_level}>
                    Creating your student ID
                </div>
                <div className={styles.id_sign_up_step_progress_bar}>
                    <div className={styles.id_sign_up_step_progress_active}> </div>
                    <div className={styles.id_sign_up_step_progress_inactive}> </div>
                </div>
            </div>
            <div className={styles.id_form_group}>
                <div className={styles.id_form_grou_header}>
                    We’ll use your name on your certificate
                </div>
                <label className={styles.id_form_level} htmlFor="full name">
                    Full Name
                </label>
                <input type="text" name="name" className={styles.id_input} placeholder="John Smith" />
            </div>

            <button className={styles.flexible_btn}>
                Continue
            </button>
        </form>
    );
};

export default StudentId;