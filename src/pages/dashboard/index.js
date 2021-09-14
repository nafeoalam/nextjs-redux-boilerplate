import Head from 'next/head'
import Image from 'next/image'
import * as api from '../../_endpoints/routes/courses.api';
import { DashboardHomeBlock } from 'src/Components/Dashboard/DashboardHome/_DashboardHomeBlock'

export default function Dashboard({ recommendedCourses, featuredCourses }) {
  return (
    <>
      <DashboardHomeBlock recommendedCourses={recommendedCourses} featuredCourses={featuredCourses} />
    </>
  )
}

export const getStaticProps = async (context) => {

  try {
    const { data: recommendedCourses } = await api.getRecommendedCourses(111)
    const { data: featuredCourses } = await api.getFeaturedCourses()

    return {
      props: {
        recommendedCourses: recommendedCourses,
        featuredCourses: featuredCourses
      },
      revalidate: 3000
    }
  } catch (error) {
    console.log("error", error.response);
    return { props: { recommendedCourses: {} } }
  }

}