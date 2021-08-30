import { Button, Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useState } from 'react'
import Link from 'next/link'
import CheckHelper from 'src/shared/_Helper/check.helper'
import CourseCard from 'src/shared/Card/CourseCard'
import { makeStyles } from '@material-ui/core/styles'
import CategoryMenuItem from 'src/shared/Navbar/CategoryMenuItem'
import CustomSelectButtonGroup from 'src/shared/CustomButton/CustomSelectButtonGroup'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { useEffect } from 'react'
import { getCourseCategories } from 'src/redux/actions/courseActions'
import { getMegaMenu } from 'src/redux/actions/megaMenuActions'


const useStyles = makeStyles((theme) => ({
    menuItem: {
        padding: '1.6rem 0',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    viewAllButton: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1.6rem',
        },
    },
    categoryTitle: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '54px',
        alignItems: 'center',
        textAlign: 'start',
        color: '#292628',
        padding: '0 1.6rem 1.6rem 2.4rem',

    },
    menuIcon: {
        color: '#747474',
        transform: 'translateY(1px)'
    },
    menuIconActive: {
        color: '#363636',
        transform: 'translateY(1px)'
    }
}))

const filterCategories = (data, filters) => {

    const filteredData = []
    data?.forEach(item => {
        filters.forEach(filter => {
            if (item.slug === filter) {
                filteredData.push(item)
            }
        })
    })
    return filteredData
}

const getTopCategoryList = (topCategories) => {
    const topCatList = CheckHelper.hasArrayItem(topCategories) && topCategories.map(item => {
        return {
            name: item.name, slug: item.slug
        }
    })
    return topCatList
}

const CourseListWithCategory = () => {
    const dispatch = useDispatch()

    const { megaMenuData: topCategoryCourses } = useSelector(state => state.megaMenuReducer)
    const { courseCategories: categories } = useSelector(state => state.courseReducer)

    const [topCategoryList, setTopCategoryList] = useState([])

    const [filteredCategoryCourses, setFilteredCategoryCourses] = useState([])

    const router = useRouter()

    const classes = useStyles()
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))

    const [activeMenuItem, setActiveMenuItem] = useState('')
    const [category, setCategory] = useState(null)

    const [topCategories, setTopCategories] = useState([])


    const onMenuItemClick = (name) => {
        setActiveMenuItem(name)
        router.push(`/course-cat/${name}`)
    }

    const handleSelectChange = (event, newSelectedItem) => {
        setTopCategories(newSelectedItem)
    }

    useEffect(() => {
        const data = filterCategories(topCategoryCourses, topCategories)
        setFilteredCategoryCourses(data)
    }, [topCategories])

    useEffect(() => {
        if (!categories) {
            dispatch(getCourseCategories())
        }
        if (!topCategoryCourses) {
            dispatch(getMegaMenu())
        }
        if (!topCategoryList) {
            setTopCategoryList(getTopCategoryList(topCategoryCourses))
        }
    }, [dispatch, topCategoryCourses])

    return (
        <div className='recognized-certificate-container'>
            <Container maxWidth='lg' >
                <Grid container justifyContent='center'>
                    <Grid item xs={3} sm={4} md={4} className={classes.menuItem}>
                        <h1 className={classes.categoryTitle}>Category</h1>

                        {CheckHelper.hasArrayItem(categories) && categories.map((item) => (
                            <CategoryMenuItem key={item.term_id} active={activeMenuItem === item.slug} name={item.slug} title={item.name} onMenuItemClick={onMenuItemClick}>
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

                    <Grid item xs={9} sm={8} md={8}>
                        <Grid container>
                            <h2 className='course-category-title'>All Courses</h2>
                            <CustomSelectButtonGroup contents={topCategoryList} value={topCategories} onChange={handleSelectChange} />
                        </Grid>

                        {CheckHelper.hasArrayItem(topCategoryCourses) && !CheckHelper.hasArrayItem(filteredCategoryCourses) && (
                            topCategoryCourses.map(category => (

                                CheckHelper.hasArrayItem(category.courses) && (
                                    <div key={category.term_id} className='categorywise-featured-course-container'>

                                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                            <Grid item>
                                                <h2 className='course-category-title'>{category.name}</h2>
                                            </Grid>
                                            {CheckHelper.hasArrayItem(category?.courses) && (
                                                <Link href={`/course-cat/${category.slug}`}>
                                                    <Button variant="outlined" color="primary" className={classes.viewAllButton}>
                                                        View All
                                                    </Button>
                                                </Link>
                                            )}
                                        </Grid>
                                        <Grid container spacing={3} >
                                            {CheckHelper.hasArrayItem(category?.courses) ? (
                                                category.courses.slice(0, 3).map(course => {
                                                    return <Grid key={course.slug} item container justifyContent='center' xs={12} sm={6} md={4} className='categorywise-courses-container'>
                                                        <CourseCard cardValues={{ courseName: course.title, totalStudents: course.student_count, imageUrl: course.featured_image, rating: course.average_rating, slug: course.slug }} />
                                                    </Grid>
                                                })
                                            ) : (
                                                <p style={{ width: '100%', textAlign: 'center', padding: '1.6rem' }} >No Course Yet</p>
                                            )}
                                        </Grid>

                                    </div>
                                )
                            ))
                        )}

                        {CheckHelper.hasArrayItem(filteredCategoryCourses) && (
                            filteredCategoryCourses.map(category => (

                                CheckHelper.hasArrayItem(category.courses) && (
                                    <div key={category.term_id} className='categorywise-featured-course-container'>

                                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                                            <Grid item>
                                                <h2 className='course-category-title'>{category.name}</h2>
                                            </Grid>
                                            {CheckHelper.hasArrayItem(category?.courses) && (
                                                <Link href={`/course-cat/${category.slug}`}>
                                                    <Button variant="outlined" color="primary" className={classes.viewAllButton}>
                                                        View All
                                                    </Button>
                                                </Link>
                                            )}
                                        </Grid>
                                        <Grid container spacing={3} >
                                            {CheckHelper.hasArrayItem(category?.courses) ? (
                                                category.courses.slice(0, 3).map(course => {
                                                    return <Grid key={course.slug} item container justifyContent='center' xs={12} sm={6} md={4} className='categorywise-courses-container'>
                                                        <CourseCard cardValues={{ courseName: course.title, totalStudents: course.student_count, imageUrl: course.featured_image, rating: course.average_rating, slug: course.slug }} />
                                                    </Grid>
                                                })
                                            ) : (
                                                <p style={{ width: '100%', textAlign: 'center', padding: '1.6rem' }} >No Course Yet</p>
                                            )}
                                        </Grid>

                                    </div>
                                )
                            ))
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CourseListWithCategory
