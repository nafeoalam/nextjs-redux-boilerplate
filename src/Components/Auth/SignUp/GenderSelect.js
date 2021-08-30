import React from 'react';
import styles from './SignUp.module.css';
const GenderSelect = () => {
    return (
        <form className={styles.id_sign_up}>
            <div className={styles.id_sign_up_step_progress}>
                <div className={styles.id_sign_up_step_progress_level}>
                    Personalizing your learning experience
                </div>
                <div className={styles.id_sign_up_step_progress_bar}>
                    <div className={styles.id_sign_up_step_progress_active}> </div>
                    <div className={styles.id_sign_up_step_progress_inactive}> </div>
                </div>
            </div>
            <div className={styles.id_form_group}>
                <div className={styles.id_form_grou_header}>
                    Whats your gender?
                </div>
                <div className={styles.id_form_subheader}>
                    We use this to personalize your content
                </div>

                <label className={styles.id_form_level} htmlFor="full name">
                    Gender
                </label>
                <div className={styles.signup_module_radio_row}>
                    <div className={styles.from_check}>
                        <input name="gender" type="radio" id="male" className={styles.form_check_input} value="male" />
                        <label title="" htmlFor="male" className={styles.form_check_label}>Male</label>
                    </div>
                    <div className={styles.from_check}>
                        <input name="female" type="radio" id="female" className={styles.form_check_input} value="female" />
                        <label title="" htmlFor="male" className={styles.form_check_label}>Female</label>
                    </div>
                </div>
            </div>

            <button className={styles.flexible_btn}>
                Continue
            </button>
        </form>
    );
};

export default GenderSelect;