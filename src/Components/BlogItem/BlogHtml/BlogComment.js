import { Button, Divider, TextField, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { FaShare } from "react-icons/fa";
import styles from './BlogHtml.module.css';

const BlogComment = () => {
    return (
        <div className={styles.comment_section}>
            <div>
                <Typography variant="h3" component="p" gutterBottom> Comments (10) </Typography>
                <div className={styles.comment_show}>
                    <div className={styles.comment_wrapper}>
                        <img src="/assets/images/blog/male_avatar.svg" alt="avatar" />
                        <div className={styles.comment_content}>
                            <Typography variant="h4" component="p" gutterBottom> Jevier Fernandez </Typography>
                            <Typography variant="h5" component="p">
                                At amet libero ornare ultricies gravida tortor.
                                Velit eu consequat aliquam elit quis mauris purus eu tortor.
                                Nunc duis vel semper viverra pulvinar ut nibh porttitor.
                            </Typography>
                            <div className={styles.comment_icon_wrapper}>
                                <div className={styles.comment_icons} >
                                    <FavoriteIcon />
                                    <Typography variant="h5" component="p" className={styles.comment_icon_txt}> 5 Likes </Typography>
                                </div>
                                <div className={styles.comment_icons} style={{ padding: '0 20px' }}>
                                    <FaShare />
                                    <Typography variant="h5" component="p" className={styles.comment_icon_txt}> 5 Reply </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.comment_reply}>
                    <div className={styles.comment_wrapper}>
                        <img src="/assets/images/blog/female_avatar.svg" alt="avatar" />
                        <div className={styles.comment_content}>
                            <Typography variant="h4" component="p" gutterBottom> Jevier Fernandez </Typography>
                            <Typography variant="h5" component="p">
                                At amet libero ornare ultricies gravida tortor.
                                Velit eu consequat aliquam elit quis mauris purus eu tortor.
                                Nunc duis vel semper viverra pulvinar ut nibh porttitor.
                                            </Typography>
                            <div className={styles.comment_icon_wrapper}>
                                <div className={styles.comment_icons} >
                                    <FavoriteIcon />
                                    <Typography variant="h5" component="p" className={styles.comment_icon_txt}> 5 Likes </Typography>
                                </div>
                                <div className={styles.comment_icons} style={{ padding: '0 20px' }}>
                                    <FaShare />
                                    <Typography variant="h5" component="p" className={styles.comment_icon_txt}> 5 Reply </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider component="hr" style={{ margin: '20px 0' }} />
            <Typography variant="h3" component="p" gutterBottom> Leave a Reply </Typography>
            <Typography variant="h5" component="p" gutterBottom> Porttitor eget in pellentesque elit sit enim tincidunt. </Typography>
            <div>
                <form noValidate autoComplete="off">
                    <div className={styles.comment_input_wrapper}>
                        <TextField className={styles.comment_input_name} fullWidth id="outlined-basic" label="Your Name" variant="outlined" />
                        <TextField className={styles.comment_input_email} fullWidth id="outlined-basic" label="Email Address " variant="outlined" />
                    </div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write you text here . . ."
                        fullWidth
                        multiline
                        maxRows={4}
                        variant="outlined"
                        size="medium"
                    />
                    <Button variant="contained" color="primary" className={styles.comment_btn}>
                        Post Comment
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default BlogComment;