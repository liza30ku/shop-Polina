import React from 'react';
import styles from '@/styles/main-page/index.module.scss';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero__container}>
        <div className={styles.Hero__content}>
          <img src="/img/polinacenter.png" alt="Hero Image" className={styles.Hero__image} />
          <button className={styles.Hero__button}>Shop now</button>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
