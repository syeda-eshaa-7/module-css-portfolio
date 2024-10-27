import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from '../component/Hero.module.css'

const HeroSection = () => {
  return (
    <div id='home' className={styles.heroSection}>
      <div className={styles.container}>
        <div>
          <p className={styles.introText}>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className={styles.heading}>
            Hi, I&#39;m <span className={styles.highlightedName}>Syeda Esha</span>
          </h1>
          <h1 className={styles.subHeading}>A Front-End Web Developer</h1>
          <p className={styles.description}>
            I&apos;m focused on building responsive front-end web applications integrating back-end technologies.
          </p>
          <div className={styles.iconContainer}>
            <a
              href='https://www.linkedin.com/in/syeda-esha-0532692b4/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.iconWrapper}>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/syeda-eshaa-7'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.iconWrapper}>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className={styles.iconWrapper}>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className={styles.iconWrapper}>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
