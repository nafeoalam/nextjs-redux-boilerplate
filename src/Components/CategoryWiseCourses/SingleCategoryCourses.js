import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CategoryMenuItem from 'src/shared/Navbar/CategoryMenuItem'
import CheckHelper from 'src/shared/_Helper/check.helper'
import CourseCard from 'src/shared/Card/CourseCard'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import CustomSelectButtonGroup from 'src/shared/CustomButton/CustomSelectButtonGroup'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import * as api from 'src/api/routes/courses.api'
import { getCourseCategories } from 'src/redux/actions/courseActions'

const accountingCourses = {
    "category": 'Accounting & Finance',
    "slug": 'accounting',
    "totalCourses": 325,
    "data": [
        {
            "id": 1,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 4,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 2,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 5,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 3,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 3,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 4,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 4.5,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 5,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 4,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 6,
            "courseName": "Financial Analysis",
            "totalStudents": 1532,
            "rating": 2,
            "imageUrl": "/assets/images/course-image-demo.png"
        }]
}
const businessCourses = {
    "category": 'Business',
    "slug": 'business',
    "totalCourses": 325,
    "data": [
        {
            "id": 1,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 4,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 2,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 5,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 3,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 4,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 4,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 3,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 5,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 4,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
        {
            "id": 6,
            "courseName": "Estate Agent Diploma",
            "totalStudents": 3097,
            "rating": 3,
            "imageUrl": "/assets/images/course-image-demo.png"
        },
    ]

}

const useStyles = makeStyles((theme) => ({
    menuItem: {
        padding: '1.6rem 0',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    categoryTitle: {
        fontWeight: '600',
        fontSize: '2rem',
        lineHeight: '3rem',
        alignItems: 'center',
        textAlign: 'start',
        color: '#292628',
        padding: '1.6rem 1.6rem 1.6rem 2.4rem',

    },
    menuIcon: {
        color: '#747474',
        transform: 'translateY(1px)'
    },
    menuIconActive: {
        color: '#363636',
        transform: 'translateY(1px)'
    },
    pagination: {
        padding: '1.6rem 0'
    }
}))

const SingleCategoryCourses = () => {

    const dispatch = useDispatch()

    const classes = useStyles()
    const router = useRouter()
    const { categorySlug, items_page } = router.query

    const { courseCategories: categories } = useSelector(state => state.courseReducer)

    const [activeMenuItem, setActiveMenuItem] = useState(categorySlug)
    const [category, setCategory] = useState(null)

    const [page, setPage] = useState(items_page || 1)

    const handleChange = (event, value) => {
        setPage(value)
        router.push(`/course-cat/${categorySlug}/?items_page=${value}`)
    }
    const [totalPage, setTotalPage] = useState(0)

    const onMenuItemClick = (name) => {
        setPage(1)
        setActiveMenuItem(name)
        router.push(`/course-cat/${name}`)
    }

    useEffect(async () => {
        try {
            const { data } = await api.fetchCategoryCourses({ categoryName: categorySlug, page: items_page || 1, count: 6 })
            setCategory(data)
            setTotalPage(data?.max_num_pages)
        } catch (error) {
            console.log(error.message)
        }

        if (!categories) {
            dispatch(getCourseCategories())
        }

    }, [dispatch, categorySlug, items_page])


    return (
        <Container>
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
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <h2 className='course-category-title'>{category?.category?.name}</h2>
                    </Grid>

                    <Grid container spacing={3} style={{ marginBottom: '1.6rem' }}>

                        {CheckHelper.hasArrayItem(category?.courses) ? (
                            category.courses.map(course => {
                                return <Grid key={course.ID} item container justifyContent='center' xs={12} sm={6} md={4} className='categorywise-courses-container'>
                                    <CourseCard cardValues={{ courseName: course.post_title, totalStudents: course.student_count, imageUrl: course.featured_image, rating: course.average_rating, slug: course.slug }} />
                                </Grid>
                            })
                        ) : (
                            <Grid item container justifyContent='center' xs={12} sm={6} md={4}>
                                <p style={{ textAlign: 'center', padding: '1.6rem' }} >No Course Yet</p>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {totalPage > 0 && (
                            <Pagination count={totalPage} page={page} style={{ fontSize: '1.6rem !important' }} color='primary' size='large' shape="rounded" className={classes.pagination} onChange={handleChange} />
                        )}
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}

export default SingleCategoryCourses