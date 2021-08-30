import React from 'react';
import styles from './SignUp.module.css';
const Agreement = () => {
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
                    Stay on top of your learning with handy
                    text reminders
                </div>
                <label className={styles.id_form_level} htmlFor="full name">
                    Email
                </label>
                <input type="text" name="name" className={styles.id_input} placeholder="John Smith" />
            </div>

            <div className={styles.id_form_disclaimer}>
                <div className={styles.id_form_form_check}>
                    <input name="disclaimer" type="checkbox" id="disclaimer" className={styles.id_form_form_check} />
                    <label className={styles.id_form_level_disclaimer} htmlFor="full name">
                        I Agree To Receive Personalised Communications From Shaw Academy For Reminder Communications, Services And Promotional Offers. I Understand I Can Unsubscribe Any Time As Instructed In The Privacy Policy. By Signing Up, You Agree To One Education Privacy Policy And Terms Of Use.
                    </label>
                </div>
            </div>
            <button className={styles.flexible_btn}>
                Continue
            </button>

            <h6 style={{ textAlign: 'center' }}> Why Do We Need Your Number? </h6>

            <div className={styles.signup_reason}>
                <img className={styles.signup_reason_img} src="/assets/images/steps/alarm_icon.png" alt="icon" />
                <span> So you can stay on top of your learning with reminders for your classes. </span>
            </div>

            <div className={styles.signup_reason}>
                <img className={styles.signup_reason_img} src="/assets/images/steps/grad_icon.png" alt="icon" />
                <span> So you can stay on top of your learning with reminders for your classes. </span>
            </div>

            <div className={styles.signup_reason}>
                <img className={styles.signup_reason_img} src="/assets/images/steps/phone_icon.png" alt="icon" />
                <span> So you can stay on top of your learning with reminders for your classes. </span>
            </div>

        </form>
    );
};

export default Agreement;