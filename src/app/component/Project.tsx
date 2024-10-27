
// import React from 'react';
// import ProjectItem from './Projectitem';
// import styles from './Project.module.css'; // Import the CSS module

// const Projects = () => {
//   return (
//     <div id='projects' className={styles.container}>
//       <div className={styles.container}>
//         <p className={styles.title}>Projects</p>
//         <h2 className={styles.heading}>What I&apos;ve Built</h2>
//         <div className={styles.grid}>
//           <ProjectItem
//             title='Property Finder'
//             backgroundImg='/assets/projects/property.jpg' // Ensure correct path
//             projectUrl='/property'
//             tech='React JS'
//           />
//           <ProjectItem
//             title='Crypto App'
//             backgroundImg='/assets/projects/crypto.jpg' // Ensure correct path
//             projectUrl='/crypto'
//             tech='React JS'
//           />
//           <ProjectItem
//             title='Netflix App'
//             backgroundImg='/assets/projects/netflix.jpg' // Ensure correct path
//             projectUrl='/netflix'
//             tech='React JS'
//           />
//           <ProjectItem
//             title='Twitch UI'
//             backgroundImg='/assets/projects/twitch.jpg' // Ensure correct path
//             projectUrl='/twitch'
//             tech='Next JS'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import ProjectItem from './Projectitem';
import styles from './Project.module.css'; // Import the CSS module

const Projects = () => {
  return (
    <div id='projects' className={styles.projectsContainer}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>Projects</p>
        <h2 className={styles.heading}>What I&apos;ve Built</h2>
        <div className={styles.grid}>
          <ProjectItem
            title='Property Finder'
            backgroundImg='/assets/projects/property.jpg' // Ensure correct path
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg='/assets/projects/crypto.jpg' // Ensure correct path
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg='/assets/projects/netflix.jpg' // Ensure correct path
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg='/assets/projects/twitch.jpg' // Ensure correct path
            projectUrl='/twitch'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
