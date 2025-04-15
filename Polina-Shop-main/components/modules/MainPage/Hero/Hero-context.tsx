import React from 'react'; 
import styles from '@/styles/main-page/index.module.scss'; 
 
const HeroContext = () => { 
  return ( 
    <section className={styles.HeroContext}> 
      <div className={styles.HeroContext__container}> 
        <img src="/img/hero-concept.png" alt="Image" className={styles.HeroContext__image} /> 
      </div> 
    </section> 
  ); 
}; 
 
const HeroContext2 = () => { 
  return ( 
    <section className={styles.HeroContext2}> 
      <div className={styles.HeroContext2__container}> 
        <img src="/img/hero-concept2.png" alt="Image" className={styles.HeroContext2__image} /> 
      </div> 
    </section> 
  ); 
}; 
 
const HeroSection = () => { 
  return ( 
    <> 
      <HeroContext /> 
      <HeroContext2 /> 
    </> 
  ); 
}; 
 
export { HeroSection };