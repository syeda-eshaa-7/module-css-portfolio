import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../component/About.module.css';

const About = () => {
  return (
    <div id='about' className={styles.aboutSection}>
      <div className={`${styles.container} md:grid grid-cols-3 gap-8`}>
        <div className={styles.textContainer}>
          <p className={styles.sectionTitle}>About</p>
          <h2 className={styles.heading}>Who I Am</h2>
          <p className={styles.paragraph}>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I&apos;m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className={styles.paragraph}>
            My journey in web development started with a passion for design and technology. 
            I love transforming ideas into engaging interfaces that enhance user experiences.
            I&apos;M always eager to learn new skills and stay updated with the latest trends in the industry.
          </p>
          <Link href='/#projects'>
            <p className={styles.linkText}>Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/assets/about.jpg'} width={400} height={500} className={styles.roundedImage} alt='About Image' />
        </div>
      </div>
    </div>
  );
};

export default About;
