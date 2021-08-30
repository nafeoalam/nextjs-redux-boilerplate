import React from 'react';
import styles from './SignUp.module.css';
const SingleChoice = () => {
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
            <div className={styles.signup}>
                <div className={styles.signup_single_choice}>
                    <p>
                        Making learning a priority and finding the time to study
                    </p>
                </div>

                <div className={styles.signup_single_choice}>
                    <p>
                        Keeping myself motivated - I always fall off the wagon eventually
                    </p>
                </div>

                <div className={styles.signup_single_choice}>
                    <p>
                        Study is long and repetitive - I get bored easily
                    </p>
                </div>

                <div className={styles.signup_single_choice}>
                    <p>
                        None of these
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleChoice;