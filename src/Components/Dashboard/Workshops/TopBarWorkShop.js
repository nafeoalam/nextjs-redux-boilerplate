import { Box, Container, Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import presentationImg from '../../../../public/assets/images/workshops/presentation.svg'
import feedbackImg from '../../../../public/assets/images/workshops/feedback.svg'
import helpImg from '../../../../public/assets/images/workshops/help.svg'
import CloseIcon from '@material-ui/icons/Close';
const TopBarWorkShop = ({ customClass, onClose }) => {
    return (
        <div className={customClass.topWorkshopWrap}>
            <div className={customClass.topHeader}>
                <Typography variant="h3" align="center" className="sectionTitle">
                    More Guidance. More Community. <br /> More Learning.
                </Typography>
            </div>
            <div onClick={onClose} className={customClass.closeIcon}>

                <CloseIcon fontSize="large" />
            </div>
            <Grid container >
                <Grid item sm={4}>
                    <div className={customClass.singleTop}>
                        <div className={customClass.imgWrap}>
                            <Image src={presentationImg} alt="top" />
                        </div>

                        <Typography align="center" variant="body2">
                            Complete a curated set of classes, selected to keep you engaged
                        </Typography>

                    </div>
                </Grid>
                <Grid item sm={4}>
                    <div className={[customClass.singleTop, customClass.middleTopitem].join(" ")}>
                        <div className={customClass.imgWrap}>
                            <Image src={feedbackImg} alt="top" />
                        </div>
                        <Typography align="center" variant="body2">
                            Complete a curated set of classes, selected to keep you engaged
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={4}>
                    <div className={customClass.singleTop}>
                        <div className={customClass.imgWrap}>
                            <Image src={helpImg} alt="top" />
                        </div>
                        <Typography align="center" variant="body2">
                            Complete a curated set of classes, selected to keep you engaged
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopBarWorkShop
