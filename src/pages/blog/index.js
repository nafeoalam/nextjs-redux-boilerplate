import Head from 'next/head';
import React from 'react';
import { fetchAllBlogPosts, fetchEditorPicks, fetchLatestNews, fetchLatestTutorials } from 'src/api/routes/blog.api';
import { fetchRecentPost } from 'src/api/routes/courses.api';
import BlogsBlock from "src/Components/Blogs/_BlogsBlock";


export default function Blogs({ all_posts , recent_posts, editor_picks, latest_news, latest_tutorials }) {
    return (
        <>
            <Head></Head>
            <BlogsBlock
              editor_picks={editor_picks}
              all_posts={all_posts}
              recent_posts={recent_posts}
              latest_news={latest_news}
              latest_tutorials={latest_tutorials}
            />
        </>
    )
}


export const getStaticProps = async (context) => {
    try {
      const {data} = await fetchAllBlogPosts(1, 6);
      const {data : posts} = await fetchRecentPost(10)
      const { data : editor_picks } = await fetchEditorPicks()
      const { data : latest_news } = await fetchLatestNews()
      const { data : latest_tutorials } = await fetchLatestTutorials()
      return {
        props: {
          all_posts: data,
          recent_posts: posts,
          editor_picks: editor_picks,
          latest_news: latest_news.data,
          latest_tutorials: latest_tutorials.data
        }
      }
    } catch (error) {
      return { props: { all_posts: {}, recent_posts: {}, editor_picks: {}, latest_news : {}, latest_tutorials: {}} }
    }
  
  }



