import { Container } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import Slider from "react-slick";
import CheckHelper from 'src/shared/_Helper/check.helper';
import SingleStories from './SingleStories';
import styles from './UserStoriesSlider.module.css';

const PrevIcon = ({ currentSlide, slideCount, ...props }) => {
    return <KeyboardBackspaceIcon {...props} color="primary" fontSize="large" />
}
const NextIcon = ({ currentSlide, slideCount, ...props }) => {
    return <ArrowRightAltIcon {...props} color="primary" fontSize="large" />
}

const UserStoriesSlider = ({ testimonials }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
    };
    return (
        <section className="sectionWrapper">
            <Container>
                <div className={styles.bgClass}>
                    <Slider {...settings}>
                        {
                            CheckHelper.hasArrayItem(testimonials) ? testimonials.map((testimonial, tID) => (
                                <>
                                    <SingleStories customStyles={styles} testimonial={testimonial} />
                                </> 
                            ))
                            : ""
                        }
                    </Slider>
                </div>
                {/* <div className={styles.customButton}>
                    <Button variant="contained" color="primary">See More Stories</Button>
                </div> */}
            </Container>
        </section>

    )
}

export default UserStoriesSlider
