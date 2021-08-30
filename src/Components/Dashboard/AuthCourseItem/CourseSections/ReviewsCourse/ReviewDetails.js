import { Divider, Typography } from '@material-ui/core';
import { Pagination, Rating } from '@material-ui/lab';
import React from 'react';
import styles from './ReviewCourse.module.css';


function ReviewDetails() {
    return (
        <div className={styles.comment_section}>
            <div>
                <div className={styles.comment_show}>
                    <div className={styles.comment_wrapper}>
                        <img src="/assets/images/blog/male_avatar.svg" alt="avatar" />
                        <div className={styles.comment_content}>
                            <Rating name="read-only" value="1" readOnly size="large" />
                            <Typography variant="h4" component="p" gutterBottom> Jevier Fernandez </Typography>
                            <Typography variant="h5" component="p">
                                At amet libero ornare ultricies gravida tortor.
                                Velit eu consequat aliquam elit quis mauris purus eu tortor.
                                Nunc duis vel semper viverra pulvinar ut nibh porttitor.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={styles.comment_reply}>
                    <div className={styles.comment_wrapper}>
                        <img src="/assets/images/blog/female_avatar.svg" alt="avatar" />
                        <div className={styles.comment_content}>
                        <Rating name="read-only" value="1" readOnly size="large" />
                            <Typography variant="h4" component="p" gutterBottom> Jevier Fernandez </Typography>
                            <Typography variant="h5" component="p">
                                At amet libero ornare ultricies gravida tortor.
                                Velit eu consequat aliquam elit quis mauris purus eu tortor.
                                Nunc duis vel semper viverra pulvinar ut nibh porttitor.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <Divider component="hr" style={{ margin: '20px 0' }} />

            <Pagination count={10} color='primary' shape="rounded" />

        </div>
    )
}

export default ReviewDetails
