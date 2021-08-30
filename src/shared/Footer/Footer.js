import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import footer_logo from 'public/assets/images/countries/flogo.png'
import facebook from 'public/assets/images/countries/facebook.png'
import twitter from 'public/assets/images/countries/twitter.png'
import linkedin from 'public/assets/images/countries/linkedin.png'
import instagram from 'public/assets/images/countries/instagram.png'
import uk from 'public/assets/images/countries/uk.png'
import us from 'public/assets/images/countries/us.png'
import dubai from 'public/assets/images/countries/dubai.png'
import france from 'public/assets/images/countries/france.png'
import aus from 'public/assets/images/countries/aus.png'
import canada from 'public/assets/images/countries/canada.png'
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <section className={styles.title, styles.bg, styles.ez_footer}>
            <Container className={styles.section_seperator}>
                <Grid container spacing={0}>
                    <Grid item md={7} container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Grid item md={4}>
                            <h4>Skills</h4>
                            <ul className={styles.ul}>
                                <li><Link href="/"><a>Photography</a></Link></li>
                                <li><Link href="/"><a>Music</a></Link></li>
                                <li><Link href="/"><a>Marketing</a></Link></li>
                                <li><Link href="/"><a>Technology</a></Link></li>
                                <li><Link href="/"><a>Beauty</a></Link></li>
                            </ul>
                        </Grid>
                        <Grid item md={4}>
                            {/* <h4></h4> */}
                            <ul className={styles.ul} style={{ marginTop: '34px' }}>
                                <li><Link href="/"><a>Language</a></Link></li>
                                <li><Link href="/"><a>Health Wallness</a></Link></li>
                                <li><Link href="/"><a>Finance</a></Link></li>
                                <li><Link href="/"><a>Design</a></Link></li>
                                <li><Link href="/"><a>Business & Analytics</a></Link></li>
                            </ul>
                        </Grid>
                        <Grid item md={4}>
                            <h4>Important Links</h4>
                            <ul className={styles.ul}>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/"><a>Success Stories</a></Link></li>
                                <li><Link href="/"><a>All Courses</a></Link></li>
                                <li><Link href="/"><a>Complaints Policy</a></Link></li>
                                <li><Link href="/blog"><a>Blog</a></Link></li>
                                <li><Link href="/"><a>Terms of use</a></Link></li>
                                <li><Link href="/"><a>Contact</a></Link></li>
                                <li><Link href="/"><a>FAQ</a></Link></li>
                                <li><Link href="/"><a>Our Partners</a></Link></li>
                                <li><Link href="/"><a>Affiliate</a></Link></li>
                                <li><Link href="/"><a>Privacy Policy</a></Link></li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item className={styles.footer_info} md={5}>
                        <Image src={footer_logo} alt="" />
                        <p>With a team of industry professionals producing and delivering our course content,
                            you can be sure the skills and knowledge you learn are applicable to your career aspirations,
                            whether that’s in management, administration or beyond.</p>
                        <ul className={styles.social}>
                            <li><Link href="/"><a><Image src={facebook} alt="" /></a></Link></li>
                            <li><Link href="/"><a><Image src={twitter} alt="" /></a></Link></li>
                            <li><Link href="/"><a><Image src={linkedin} alt="" /></a></Link></li>
                            <li><Link href="/"><a><Image src={instagram} alt="" /></a></Link></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <h4>Our offices around the world</h4>

                </Grid>
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                    <ul className={styles.office}>
                        <li><Image src={uk} alt="" /> London, United Kingdom</li>
                        <li><Image src={dubai} alt="" /> Dubai, United Arab Emirates</li>
                        <li><Image src={us} alt="" /> New York, United States of America</li>
                        <li><Image src={aus} alt="" /> Sydney, Australia</li>
                        <li><Image src={france} alt="" /> Paris, France</li>
                        <li><Image src={canada} alt="" /> Toronto, Canada</li>
                    </ul>
                </Grid>
                <hr className={styles.hr} />
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item md={6} xs={12}>
                        <p>Copyright © 2021 One Education</p>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <ul className={styles.copyrightLink}>
                            <li><Link href="/"><a>Sitemap</a></Link></li>
                            <li><Link href="/"><a>Terms Of Use</a></Link></li>
                            <li><Link href="/"><a>FAQ</a></Link></li>
                            <li><Link href="/"><a>Cookie</a></Link></li>
                            <li><Link href="/"><a>Privacy</a></Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

export default Footer;
