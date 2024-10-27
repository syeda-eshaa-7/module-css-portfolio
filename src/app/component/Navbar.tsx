"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import styles from '../component/Navbar.module.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState('#ecf0f3');
  const [linkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={`${styles.navbar} ${shadow ? styles.navbarShadow : ''}`}
    >
      <div className={styles.navbarContent}>
        <Link href='/'>
          <Image
            src={'/assets/navLogo.png'}
            alt='/'
            width={125}
            height={50}
            className={styles.logo}
          />
        </Link>
        <div>
          <ul style={{ color: linkColor }} className={styles.navLinks}>
            <li className={styles.navLink}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.navLink}>
              <Link href='/#about'>About</Link>
            </li>
            <li className={styles.navLink}>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className={styles.navLink}>
              <Link href='/#projects'>Projects</Link>
            </li>

            <li className={styles.navLink}>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div style={{ color: linkColor }} onClick={handleNav} className={styles.hamburgerIcon}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? styles.overlay : ''}>
        <div className={nav ? styles.sideDrawer : styles.sideDrawerClose}>
          <div className={styles.drawerHeader}>
            <Link href='/'>
              {/* <Image src={'assets/navLogo.png'} width='87' height='35' alt='/' /> */}
            </Link>
            <div onClick={handleNav} className={styles.closeIcon}>
              <AiOutlineClose />
            </div>
          </div>
          <div className={styles.drawerNavLinks}>
            <Link href='/'>
              <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
                Projects
              </li>
            </Link>
           
            <Link href='/#contact'>
              <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
                Contact
              </li>
            </Link>
          </div>
          <p className={styles.connectText}>Let&#39;s Connect</p>
          <div className={styles.socialIcons}>
            <a href='https://www.linkedin.com/in/syeda-esha-0532692b4/' target='_blank' rel='noreferrer'>
              <div className={styles.iconWrapper}>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/syeda-eshaa-7' target='_blank' rel='noreferrer'>
              <div className={styles.iconWrapper}>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div onClick={() => setNav(!nav)} className={styles.iconWrapper}>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div onClick={() => setNav(!nav)} className={styles.iconWrapper}>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import styles from '../component/Navbar.module.css';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);
//   const [navBg] = useState('#ecf0f3');

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const handleShadow = () => {
//       setShadow(window.scrollY >= 90);
//     };
//     window.addEventListener('scroll', handleShadow);
//   }, []);

//   return (
//     <div
//       style={{ backgroundColor: navBg }}
//       className={`${styles.navbar} ${shadow ? styles.navbarShadow : ''}`}
//     >
//       <div className={styles.navbarContent}>
//         <Link href='/'>
//           {/* Logo can be added here if needed */}
//         </Link>
//         <div onClick={handleNav} className={styles.hamburgerIcon}>
//           <AiOutlineMenu size={25} />
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={nav ? styles.overlay : ''}>
//         <div className={nav ? styles.sideDrawer : styles.sideDrawerClose}>
//           <div className={styles.drawerHeader}>
//             <Link href='/'>
//               {/* Logo can be added here if needed */}
//             </Link>
//             <div onClick={handleNav} className={styles.closeIcon}>
//               <AiOutlineClose />
//             </div>
//           </div>
//           <div className={styles.drawerNavLinks}>
//             <Link href='/'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 Home
//               </li>
//             </Link>
//             <Link href='/#about'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 About
//               </li>
//             </Link>
//             <Link href='/#skills'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 Skills
//               </li>
//             </Link>
//             <Link href='/#projects'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 Projects
//               </li>
//             </Link>
//             <Link href='/resume'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 Resume
//               </li>
//             </Link>
//             <Link href='/#contact'>
//               <li onClick={() => setNav(false)} className={styles.drawerNavLink}>
//                 Contact
//               </li>
//             </Link>
//           </div>
//           <p className={styles.connectText}>Let&#39;s Connect</p>
//           <div className={styles.socialIcons}>
//             <a href='https://www.linkedin.com/in/syeda-esha-0532692b4/' target='_blank' rel='noreferrer'>
//               <div className={styles.iconWrapper}>
//                 <FaLinkedinIn />
//               </div>
//             </a>
//             <a href='https://github.com/syeda-eshaa-7' target='_blank' rel='noreferrer'>
//               <div className={styles.iconWrapper}>
//                 <FaGithub />
//               </div>
//             </a>
//             <Link href='/#contact'>
//               <div onClick={() => setNav(!nav)} className={styles.iconWrapper}>
//                 <AiOutlineMail />
//               </div>
//             </Link>
//             <Link href='/resume'>
//               <div onClick={() => setNav(!nav)} className={styles.iconWrapper}>
//                 <BsFillPersonLinesFill />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
