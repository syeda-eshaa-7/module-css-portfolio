import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  return (
    <div id='contact' className={styles.contactSection}>
      <div className={styles.container}>
        <p className={styles.title}>Contact</p>
        <h2 className={styles.heading}>Get In Touch</h2>
        <div className={styles.gridContainer}>
          {/* left */}
          <div className={styles.leftColumn}>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className={styles.image}
                  src='/assets/contact.jpg' // Adjusted path
                  alt='Contact Image'
                  width={400} // Set width
                  height={300} // Set height
                />
              </div>
              <div>
                <h2 className='py-2'>Syeda Esha</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div className={styles.connectWithMe}>
                <p className='uppercase'>Connect With Me</p>
                <div className={styles.connectIcons}>
                  <Link
                    href='https://www.linkedin.com/in/syeda-esha-0532692b4/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className={styles.icon}>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/syeda-eshaa-7'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className={styles.icon}>
                      <FaGithub />
                    </div>
                  </Link>
                  <div className={styles.icon}>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <div className={styles.icon}>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className={styles.rightColumn}>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className={styles.formGroup}>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className={styles.formInput}
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className={styles.formInput}
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className={styles.formInput}
                    type='email'
                    name='email'
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className={styles.formInput}
                    type='text'
                    name='subject'
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className={styles.formInput}
                    rows={10}
                    name='message'
                  ></textarea>
                </div>
                <button className={styles.sendButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.backToTop}>
          <Link href='/'>
            <div className={styles.backToTopIcon}>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
