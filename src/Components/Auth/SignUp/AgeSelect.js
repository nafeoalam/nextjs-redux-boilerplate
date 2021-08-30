import React from 'react';
import styles from './SignUp.module.css';
const AgeSelect = () => {
    return (
        <>
            <div className={styles.signup_heading_section}>
                <p className={styles.signup_heading_title}>
                    What’s the main reason you’d like to do an online course?
                </p>
                <p className={styles.signup_heading_sub_title}>
                    We are here to help you achieve your goals!
                </p>
            </div>

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
                        What is your age?
                    </div>
                    <div className={styles.id_form_subheader}>
                        We use this to personalize your content
                    </div>

                    <label className={styles.id_form_level} htmlFor="full name">
                        Age
                    </label>
                    <select name="age" className={styles.sign_up_select}>
                        <option value="" disabled="" selected="">Age</option>
                        <option value="Less than 18">Less than 18</option>
                        <option value="22-25">22-25</option>
                        <option value="18-21">18-21</option>
                        <option value="26-30">26-30</option>
                        <option value="31-35">31-35</option>
                        <option value="36-40">36-40</option>
                        <option value="41-45">41-45</option>
                        <option value="46-50">46-50</option>
                        <option value="51-55">51-55</option>
                        <option value="56-60">56-60</option>
                        <option value="61-65">61-65</option>
                        <option value="65+">65+</option>
                    </select>
                </div>

                <button className={styles.flexible_btn}>
                    Continue
                </button>
            </form>

        </>
    );
};

export default AgeSelect;