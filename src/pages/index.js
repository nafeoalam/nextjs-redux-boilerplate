import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as api from 'src/api/routes/courses.api';
import HomeBlock from "src/Components/Home/_HomeBlock";
import { getMegaMenu } from 'src/redux/actions/megaMenuActions'
export default function Home({ popular_courses, testimonials, recent_posts, featured_posts }) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMegaMenu())
    },[])
  return (
    <div>
      <HomeBlock

        popular_courses={popular_courses}
        testimonials={testimonials}
        featured_posts={featured_posts}
        recent_posts={recent_posts}

      />
    </div>
  )
}

export const getStaticProps = async (context) => {
  try {
    const { data: popular_courses } = await api.fetchPopularCourses();
    const {data: testimonials} = await api.fetchTestimonial()
    const { data: featured_posts } = await api.fetchFeaturedPost()
    const { data: recent_posts } = await api.fetchRecentPost(6)
    return {
      props: {
        popular_courses: popular_courses,
        testimonials: testimonials,
        featured_posts: featured_posts,
        recent_posts: recent_posts.data,
      },
      revalidate: 3600
    }
  } catch (error) {
    return { props: { popular_courses: {} } }
  }

}
