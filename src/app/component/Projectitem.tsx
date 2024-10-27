import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Projectitem.module.css'; // Import the CSS module

interface ProjectItemProps {
  title: string;
  backgroundImg: string; // StaticImageData for local images or string for external URLs
  tech: string;
  projectUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={backgroundImg} alt={title} layout="responsive" width={400} height={300} /> 
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tech}>{tech}</p>
        <Link href={projectUrl}>
          <p className={styles.moreInfo}>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
