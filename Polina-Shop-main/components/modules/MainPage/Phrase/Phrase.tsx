import React from "react";
import styles from '@/styles/main-page/index.module.scss'; 

const PhraseSection = () => { 
  return ( 
    <section className={styles['phrase-section']}> 
      <div className={styles['phrase-section__container']}> 
        <img src="/img/phrase.png" alt="Image" className={styles['phrase-section__image']} /> 
      </div> 
    </section> 
  ); 
}; 
 
export default PhraseSection;
