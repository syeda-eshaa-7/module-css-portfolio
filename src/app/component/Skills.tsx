import React from 'react';
import Image from 'next/image';
import styles from '../component/Skills.module.css'; // Import the CSS Module

const Skills: React.FC = () => {
  return (
    <div id='skills' className={styles.skillsSection}>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>Skills</p>
        <h2 className={styles.heading}>What I Can Do</h2>
        <div className={styles.gridContainer}>
          {/* Skill Item for HTML */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/html.png'} width={64} height={64} alt='HTML' />
              </div>
              <div className={styles.skillName}>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for CSS */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/css.png'} width={64} height={64} alt='CSS' />
              </div>
              <div className={styles.skillName}>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for JavaScript */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/javascript.png'} width={64} height={64} alt='JavaScript' />
              </div>
              <div className={styles.skillName}>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for React */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/react.png'} width={64} height={64} alt='React' />
              </div>
              <div className={styles.skillName}>
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for Tailwind */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/tailwind.png'} width={64} height={64} alt='Tailwind' />
              </div>
              <div className={styles.skillName}>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for Firebase */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/firebase.png'} width={64} height={64} alt='Firebase' />
              </div>
              <div className={styles.skillName}>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for GitHub */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/github1.png'} width={64} height={64} alt='GitHub' />
              </div>
              <div className={styles.skillName}>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          {/* Skill Item for Next.js */}
          <div className={styles.skillItem}>
            <div className={styles.skillContent}>
              <div className={styles.skillImageContainer}>
                <Image src={'/assets/skills/nextjs.png'} width={64} height={64} alt='Next.js' />
              </div>
              <div className={styles.skillName}>
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
