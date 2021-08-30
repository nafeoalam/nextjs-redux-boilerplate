import React, { useEffect } from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import { Container, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import CategoryMenuItem from './CategoryMenuItem'
import { useState } from 'react'
import SingleCourseCard from '../Card/SingleCourseCard'
import styles from "./Navbar.module.css"
import CheckHelper from '../_Helper/check.helper'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import PaletteIcon from '@material-ui/icons/Palette'
import WorkIcon from '@material-ui/icons/Work'
import EcoIcon from '@material-ui/icons/Eco'
import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'
import AdjustIcon from '@material-ui/icons/Adjust'
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone'
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone'
import SchoolIcon from '@material-ui/icons/School'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { useDispatch, useSelector } from 'react-redux'
import { getMegaMenu } from 'src/redux/actions/megaMenuActions'
import Image from 'next/image'

// const courses = [
//     {
//         "id": 1,
//         "category_title": "Accounting & Finance",
//         "slug": 'accounting',
//         "total_course": 94,
//         "featured_courses": [
//             {
//                 "id": 1,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 2,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 3,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 4,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 5,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 6,
//                 "title": "Financial Analysis",
//                 "total_students": 1532,
//                 "rating": 4.5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//         ]
//     },
//     {
//         "id": 2,
//         "category_title": "Business",
//         "slug": "business",
//         "total_course": 359,
//         "featured_courses": [
//             {
//                 "id": 1,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 4,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 2,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 5,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 3,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 4,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 4,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 3,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 5,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 4,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//             {
//                 "id": 6,
//                 "title": "Estate Agent Diploma",
//                 "total_students": 3097,
//                 "rating": 3,
//                 "icon": "/assets/images/course-image-demo.png"
//             },
//         ]
//     }
// ]

const getCategoryCourses = (courses, categorySlug) => {

    const featuredCourses = CheckHelper.hasArrayItem(courses) && courses.filter((item) => {
        return item.slug === categorySlug
    })
    return CheckHelper.hasArrayItem(featuredCourses) ? featuredCourses[0] : null
}

const CategoryFeatureCoursesContainer = ({ category }) => {

    return (
        <Grid container spacing={2}>
            {CheckHelper.hasArrayItem(category?.courses) ? (
                category?.courses.map(course => {
                    return <Grid key={course.slug} item container justifyContent='center' xs={12} md={6} className='categorywise-courses-container'>
                        <SingleCourseCard course={course} hideRating />
                    </Grid>
                })
            ) : (
                <Grid item container justifyContent='center' xs={12} md={6} >
                    <Typography color='textPrimary' component='p' style={{ width: '100%', textAlign: 'center', fontSize: '1.6rem', padding: '1.6rem' }} >No Course Yet</Typography>
                </Grid>
            )}
        </Grid>
    )
}

const MegaMenu = ({ handleClose }) => {
    const dispatch = useDispatch()
    const { megaMenuData: categoryCourses } = useSelector(state => state.megaMenuReducer)

    const [activeMenuItem, setActiveMenuItem] = useState('')
    const [category, setCategory] = useState(null)

    const onMenuItemClick = (name) => {
        setActiveMenuItem(name)
        setCategory(getCategoryCourses(categoryCourses, name))
    }

    useEffect(() => {
        if (!categoryCourses) {
            dispatch(getMegaMenu())
        }
        const activeItem = CheckHelper.hasArrayItem(categoryCourses) && categoryCourses[0].slug
        setActiveMenuItem(activeItem)
        setCategory(getCategoryCourses(categoryCourses, activeItem))
    }, [categoryCourses])

    return (

        < Container fixed className={styles.menuContainer} >
            <Grid container  >
                <Grid item xs={12}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center' className={styles.menuHeader}>
                        <Typography className={styles.menuHeaderTitle}>
                            Browse Courses
                        </Typography>

                        <Link href='/courses'>
                            <Typography className={styles.menuHeaderLink} onClick={handleClose}>
                                View All Courses
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12} md={4} className={styles.menuItemsSection}>

                            {/* {CheckHelper.hasArrayItem(categoryCourses) && categoryCourses.map((item) => (
                                <CategoryMenuItem key={item.slug} active={activeMenuItem === item.slug} name={item.slug} title={item.name} onMenuItemClick={onMenuItemClick}>
                                    <AdjustIcon fontSize='large' className={activeMenuItem === item.slug ? styles.menuIconActive : styles.menuIcon} />
                                </CategoryMenuItem>
                            ))} */}
                            {CheckHelper.hasArrayItem(categoryCourses) && categoryCourses.map((item) => (
                                <CategoryMenuItem key={item.slug} active={activeMenuItem === item.slug} name={item.slug} title={item.name} onMenuItemClick={onMenuItemClick}>
                                    <Image
                                        src={item.cat_img || '/assets/images/cards/news_press.png'}
                                        height={35}
                                        width={35}
                                        quality={25}
                                        priority
                                        // placeholder='blur'
                                        // blurDataURL='/assets/images/cards/news_press.png'
                                        alt={item.name}
                                        className='image'
                                    />
                                </CategoryMenuItem>
                            ))}

                        </Grid>

                        <Grid item md={8} className={styles.courseSection} >

                            <Grid container direction='column' justifyContent='space-between' style={{ height: '100%' }}>

                                <CategoryFeatureCoursesContainer category={category} />

                                <span className='view-all-link'>
                                    <Link href={`/course-cat/${category?.slug}`}>
                                        <div className='view-all-allign' onClick={handleClose}>
                                            <Typography color='primary' style={{ fontSize: '1.6rem' }}>
                                                View All
                                            </Typography>
                                            <ArrowForwardIosIcon color='primary' />
                                        </div>
                                    </Link>
                                </span>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </ Container >

    )
}

export default MegaMenu
