import Head from 'next/head';
import React from 'react';
import { fetchBlogs, fetchSingleBlog } from 'src/api/routes/blog.api';
import BlogItemBlock from 'src/Components/BlogItem/_BlogItemBlock';
export default function BlogDetails({ blog }) {
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <>
            <Head>
                <div
                    dangerouslySetInnerHTML={createHTML(
                        blog.yoast_head
                    )}
                ></div>
            </Head>
            <BlogItemBlock blog={blog} />
        </>
    )
}


export const getStaticPaths = async () => {
    const { data: blogs } = await fetchBlogs();
    try {
        const paths = blogs.data.map(blog => {
            return {
                params: { blogSlug: blog.post_name }
            }
        })
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        return {
            paths: [{}],
            fallback: false
        }
    }
}

export const getStaticProps = async (context) => {
    try {
        const { data: blog } = await fetchSingleBlog(context.params.blogSlug);

        return { props: { blog: blog[0] } }
    } catch (error) {
        return { props: { blog: {} } }
    }
}

