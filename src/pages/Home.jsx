import React, { Fragment, useState } from 'react'
import styles from './Home.module.css'
import Popup from '../components/Popup';
import ImageSlide from '../components/ImageSlide';
import emoji from '../assets/emoji.svg'
import mentor from '../assets/mentor.svg'
import google from '../assets/google.svg'
import Courses from '../components/Courses';
import ImageCarousel from '../components/ImageCarousel';
import CardContainer from '../components/CardContainer';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import MorePopup from '../components/MorePopup';

const Home = () => {

  const [moreVisible, setMoreVisible] = useState(false);
  const [head, setHead] = useState('')
  const [content, setContent] = useState('')

  return (
    <Fragment>
      <Popup />
      <ImageSlide />

      <div className={styles['rating-container']}>

        <div className={styles['trust-container']}>
          <img src={emoji} className={styles['img-icon']}></img>
          <div className={styles['rating-text-container']}>
            <div className={styles['emoji-text-one']}>69,000+</div>
            <div className={styles['emoji-text-two']}>Trusted By Students</div>
          </div>
        </div>

        <div className={styles['expert-container']}>
          <img src={mentor} className={styles['img-icon']}></img>

          <div className={styles['rating-text-container']}>
            <div className={styles['emoji-text-one']}>50+</div>
            <div className={styles['emoji-text-two']}>Expert Mentors</div>
          </div>

        </div>

        <div className={styles['google-container']}>
          <img src={google} className={styles['img-icon']}></img>

          <div className={styles['rating-text-container']}>
            <div className={styles['emoji-text-one']}>4.9/5 (537)</div>
            <div className={styles['emoji-text-two']}>Google rating</div>
          </div>
        </div>

      </div>

      <Courses />
      <ImageCarousel />
      <CardContainer /> 
      <Contact />            
      <AboutUs />
      <Services 
        moreVisible={moreVisible}
        setMoreVisible={setMoreVisible}
        setHead={setHead}
        setContent={setContent}
      />
      <MorePopup 
        moreVisible={moreVisible}
        setMoreVisible={setMoreVisible}
        head={head}
        content={content}
      />

      <Footer />
    </Fragment>
  )
}
export default Home
