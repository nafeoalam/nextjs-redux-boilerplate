import { STATIC_URL } from "src/api/config/config.axios";

export const fetchAbout = () => STATIC_URL.get('/wp/v2/pages?slug=about');
export const fetchcomplaintsPolicy = () => STATIC_URL.get('/wp/v2/pages??slug=complaints-policy');
export const fetchContact = () => STATIC_URL.get('/wp/v2/pages?slug=contact');
export const fetchFaq = () => STATIC_URL.get('/wp/v2/pages?slug=faq');
export const fetchTermsOfUse = () => STATIC_URL.get('/wp/v2/pages?slug=term-of-use');
export const fetchOurPartners = () => STATIC_URL.get('/wp/v2/pages??slug=our-partners');


