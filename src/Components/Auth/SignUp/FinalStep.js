import React from 'react';
import styles from './SignUp.module.css';
const FinalStep = () => {
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
                    Educational goals
                </div>
                <div className={styles.id_form_subheader}>
                    We use this to personalize your content
                </div>

                <label className={styles.id_form_level} htmlFor="full name">
                    Educational Goals
                </label>
                <select name="goals" className={styles.sign_up_select}>
                    <option value="" disabled="" selected="">Set your education goals</option>
                    <option value="gain-promotion">Gain Promotion</option>
                    <option value="enter-new-industry">Enter New Industry</option>
                    <option value="grow-business">Grow My Business</option>
                    <option value="start-bussiness">Start a Business</option>
                    <option value="hobby">Hobby</option>
                    <option value="professional-improvement">Professional Improvement</option>
                    <option value="self-improvement">Self Improvement</option>
                </select>
            </div>

            <button className={styles.flexible_btn}>
                Continue Registration
            </button>

            <div className={styles.signup_footer}>
                <img className={styles.signup_reason_img} src="/assets/images/steps/lock_icon.png" alt="lock-icon" />
                <p> We Guarantee 100% Privacy. </p>
            </div>
            <div className={styles.signup_footer}>
                <img className={styles.signup_reason_img} src="/assets/images/steps/lock_icon.png" alt="lock-icon" />
                <p> Your Information is Safe with us. </p>
            </div>
        </form>
    );
};

export default FinalStep;