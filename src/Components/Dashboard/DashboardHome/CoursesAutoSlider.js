import Container from '@material-ui/core/Container';
import Slider from "react-slick";
import Image from 'next/image'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import DashboardAutoSlider from "/public/assets/images/dashboard-auto-slider.png"
import CustomButton from 'src/shared/CustomButton/CustomButton';
import styles from "src/styles/Dashboard.module.css"
import { createExcerpt } from 'src/shared/_Helper/createExcerpt';


function SampleNextArrow(props) {
    const { className, style, onClick, xlscreen, tabScreen } = props;
    return (
        <div onClick={onClick} className={styles.sliderArrow} style={{ right: xlscreen ? '-10rem' : 0, display: tabScreen && "none" }} >
            <ChevronRightIcon style={{ fontSize: "2rem" }} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick, xlscreen, tabScreen } = props;
    return (
        <div onClick={onClick} className={styles.sliderArrow} style={{ left: xlscreen ? '-10rem' : 0, display: tabScreen && "none" }}>
            <ChevronLeftIcon style={{ fontSize: "2rem" }} />
        </div>
    );
}

function CustomSlide({ xlscreen, children, ...rest }) {

    return (
        <div {...rest} style={{ display: "flex", flexDirection: "column", alignItems: xlscreen ? "flex-start" : "center" }}>
            {children}
        </div>
    );
}

export default function CoursesAutoSlider({ featuredCourses }) {

    const theme = useTheme();
    const xlscreen = useMediaQuery('(min-width:1500px)');
    const tabScreen = useMediaQuery('(max-width:1100px)');

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow xlscreen={xlscreen} tabScreen={tabScreen} />,
        prevArrow: <SamplePrevArrow xlscreen={xlscreen} tabScreen={tabScreen} />,

    };

    return (
        <div style={{ position: "relative", height: "50rem", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={DashboardAutoSlider} alt="" layout="fill"
                objectFit="cover" quality={100} />
            <Container maxWidth="lg">
                <div style={{ color: "#fff" }}>
                    <Slider {...settings}>
                        {featuredCourses.map(course => (<CustomSlide key={course.id} xlscreen={xlscreen}>
                            <Typography variant="h2" style={{

                                marginBottom: "1rem",
                                color: "white"

                            }}>{course.post_title}</Typography>
                            <Typography variant="body1" style={{ maxWidth: "58.8rem", fontFamily: "Poppins-Light", marginBottom: "2.5rem" }} >{course.post_excerpt ? course.post_excerpt : createExcerpt(course.post_content)}...</Typography>
                            <CustomButton variant="contained" style={{ borderRadius: "6px" }}>Watch Now</CustomButton>
                        </CustomSlide>))
                        }

                    </Slider>
                </div>
            </Container>
        </div>
    )
}
