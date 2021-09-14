import { API_URL, STATIC_URL } from "src/api/config/config.axios";

export const fetchAllBlogPosts = (current_page, post_per_page) => API_URL.get(`/blogs?page=${current_page}&posts_per_page=${post_per_page}`);
export const fetchBlogs = () => API_URL.get(`/blogs`);
export const fetchSingleBlog = (slugValue) => STATIC_URL.get(`/wp/v2/posts/?slug=${slugValue}`, {
    params: {
        slug: slugValue
    }
});

export const fetchRecentPost = (count) => API_URL.get(`/blogs?count=${count}&sort=asc`);
export const fetchRelatedPosts = () => API_URL.get(`/related-posts/103/?count=3&sort=asc`);
export const fetchEditorPicks = () => API_URL.get(`/featured-posts`);
export const fetchLatestNews = () => API_URL.get(`/latest-news?count=4&page=1`);
export const fetchLatestTutorials = () => API_URL.get(`/tutorials?count=4&page=1`);




