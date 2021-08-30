import { Button, Container, Typography } from '@material-ui/core'
import React, { useRef } from 'react'
import Slider from "react-slick"
import styles from './BlogCard.module.css'
import SingleBlogCard from './SingleBlogCard'
const BlogCard = ({ recent_posts }) => {
    //creating the ref
    const customSlider = useRef()
    // setting slider configurations
    const sliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]

    }
    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev()
    }

    return (
        <section className="sectionWrapper">

            <Container>

                <div className={styles.buttonGroup}>
                    <Button variant="text" onClick={() => gotoPrev()}>Previous</Button>
                    <Button variant="text" onClick={() => gotoNext()}>Next</Button>
                </div>

                <div className={styles.blogWrapper}>
                    <div className={styles.blogInfo}>
                        <Typography component="h2" paragraph variant="h3" className="sectionTitle" style={{
                            color: '#000000',
                            fontWeight: '600',
                            lineHeight: '5rem',
                            fontSize: '3.6rem'
                        }}>
                            Informative
                            Blogs at Your Disposal
                        </Typography>
                        <Typography component="p" variant="h6" style={{
                            fontFamily: 'OpenSans-Regular',
                            color: '#4A6474',
                            lineHeight: '3rem',
                            fontSize: '1.8rem'
                        }}>
                            Learning doesn&apos;t begin and end in the classroom. That &apos;s why One Education offer free-to-access blogs so everyone can learn something new every day!
                        </Typography>
                    </div>

                    <div className={styles.blogCardWrapper}>
                        <Slider {...sliderSettings} ref={customSlider}>
                            {recent_posts?.map(post => {
                                return <div key={post.id}> <SingleBlogCard post={post} customClasses={styles} /></div>

                            }
                            )}


                        </Slider>
                    </div>


                </div>

            </Container>

        </section>
    )
}

export default BlogCard
