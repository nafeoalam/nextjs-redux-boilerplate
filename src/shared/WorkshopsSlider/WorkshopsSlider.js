import React from 'react'
import Container from '@material-ui/core/Container';
import Slider from "react-slick";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import styles from "src/styles/Dashboard.module.css"
import courses from "../../../public/assets/json_data/courses.json"
import WorkshopCard from '../Card/WorkshopCard';
import CustomSliderContent from '../CourseSlider/CustomSliderContent';


function SampleNextArrow(props) {
    const { className, style, onClick, xlscreen } = props;
    return (
        <div onClick={onClick} className={styles.CourseSliderArrow} style={{ zIndex: 222, right: xlscreen ? "-80px" : "20px", padding: !xlscreen && "10px" }} >
            <ChevronRightIcon style={{ fontSize: "2rem", }} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick, xlscreen } = props;
    return (
        <div onClick={onClick} className={styles.CourseSliderArrow} style={{ zIndex: 222, left: xlscreen ? "-80px" : "20px", padding: !xlscreen && "10px" }}>
            <ChevronLeftIcon style={{ fontSize: "2rem", }} />
        </div>
    );
}


export default function WorkshopsSlider({ workshops }) {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const xlscreen = useMediaQuery('(min-width:1450px)');
    // const tabScreen = useMediaQuery('(max-width:1100px)');

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow xlscreen={xlscreen} />,
        prevArrow: <SamplePrevArrow xlscreen={xlscreen} />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container maxWidth="lg" className={styles.ReactSlickCourse}>
            <Slider {...settings}>
                {
                    workshops.map((workshop, index) => {
                        return <CustomSliderContent key={index}>
                            <WorkshopCard workshop={workshop} />
                        </CustomSliderContent>
                    })
                }
            </Slider>
        </Container>
    )
}

