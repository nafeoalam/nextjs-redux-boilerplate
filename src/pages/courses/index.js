import React from 'react'
import CoursesBlock from 'src/Components/Courses/_CoursesBlock'
import * as api from 'src/api/routes/courses.api';

function Courses({ courseCategories }) {
    return (
        <>
            <CoursesBlock courseCategories={courseCategories} />
        </>
    )
}

export default Courses

export const getServerSideProps = async (context) => {
    try {
        const { data: courseCategories } = await api.fetchAllCourseCategories();
        return {
            props: {
                courseCategories
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}



